import type { ColumnEntity } from "../../../features/types/columns/ColumnEntity";
import useColumns from "./index";
import { BOARDS_URL } from "../../api";

describe("useColumns store", () => {
  it("should set currentColumn when setCurrentColumn is called", () => {
    const column: ColumnEntity = { id: "1", name: "Test Column", tasks: [] };

    useColumns.getState().setCurrentColumn(column);

    expect(useColumns.getState().currentColumn).toEqual(column);
  });

  it("should add a new column and update the current board", async () => {
    const column: ColumnEntity = { id: "2", name: "New Column", tasks: [] };
    const currentBoard = {
      id: "1",
      name: "Test Board",
      background: "test-bg",
      userToken: "test-token",
      columns: [],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            ...currentBoard,
            columns: [...currentBoard.columns, column],
          }),
      })
    ) as jest.Mock;

    await useColumns.getState().addColumn(column, currentBoard);

    expect(global.fetch).toHaveBeenCalledWith(
      `${BOARDS_URL}/${currentBoard.id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ columns: [...currentBoard.columns, column] }),
      }
    );
    expect(useColumns.getState().columns).toContainEqual(column);
  });

  it("should delete a column and update the current board", async () => {
    const columnId = "2";
    const currentBoard = {
      id: "1",
      name: "Test Board",
      background: "test-bg",
      userToken: "test-token",
      columns: [{ id: columnId, name: "Column to delete", tasks: [] }],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            ...currentBoard,
            columns: currentBoard.columns.filter(
              (column) => column.id !== columnId
            ),
          }),
      })
    ) as jest.Mock;

    await useColumns.getState().deleteColumn(columnId, currentBoard);

    expect(global.fetch).toHaveBeenCalledWith(
      `${BOARDS_URL}/${currentBoard.id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          columns: currentBoard.columns.filter(
            (column) => column.id !== columnId
          ),
        }),
      }
    );
    expect(useColumns.getState().columns).not.toContainEqual(
      expect.objectContaining({ id: columnId })
    );
  });

  it("should update a column and the current board", async () => {
    const column: ColumnEntity = {
      id: "3",
      name: "Column to update",
      tasks: [],
    };
    const newTitle = "Updated Column Name";
    const currentBoard = {
      id: "1",
      name: "Test Board",
      background: "test-bg",
      userToken: "test-token",
      columns: [column],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            ...currentBoard,
            columns: currentBoard.columns.map((col) =>
              col.id === column.id ? { ...col, name: newTitle } : col
            ),
          }),
      })
    ) as jest.Mock;

    await useColumns.getState().updateColumn(currentBoard, column, newTitle);

    expect(global.fetch).toHaveBeenCalledWith(
      `${BOARDS_URL}/${currentBoard.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          columns: currentBoard.columns.map((col) =>
            col.id === column.id ? { ...col, name: newTitle } : col
          ),
        }),
      }
    );
    expect(useColumns.getState().columns).toContainEqual({
      ...column,
      name: newTitle,
    });
  });

  it("should handle errors gracefully", async () => {
    const column: ColumnEntity = { id: "4", name: "Error Column", tasks: [] };
    const currentBoard = {
      id: "1",
      name: "Test Board",
      background: "test-bg",
      userToken: "test-token",
      columns: [],
    };

    global.fetch = jest.fn(() =>
      Promise.reject(new Error("Network error"))
    ) as jest.Mock;

    await useColumns.getState().addColumn(column, currentBoard);

    expect(global.fetch).toHaveBeenCalledWith(
      `${BOARDS_URL}/${currentBoard.id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ columns: [...currentBoard.columns, column] }),
      }
    );
    expect(useColumns.getState().columns).not.toContainEqual(column);
  });

  it("should update column order", async () => {
    const newColumnOrder: ColumnEntity[] = [
      { id: "1", name: "Column 1", tasks: [] },
      { id: "2", name: "Column 2", tasks: [] },
    ];
    const currentBoard = {
      id: "1",
      name: "Test Board",
      background: "test-bg",
      userToken: "test-token",
      columns: [],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({ ...currentBoard, columns: newColumnOrder }),
      })
    ) as jest.Mock;

    await useColumns.getState().updateColumnOrder(newColumnOrder);

    expect(global.fetch).toHaveBeenCalledWith(
      `${BOARDS_URL}/${currentBoard.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ columns: newColumnOrder }),
      }
    );
    expect(useColumns.getState().columns).toEqual(newColumnOrder);
  });
});
