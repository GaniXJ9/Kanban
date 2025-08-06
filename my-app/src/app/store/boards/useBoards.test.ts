import useBoards from ".";
import { BOARDS_URL } from "../../api";

describe("useBoards store", () => {
  const board = {
    id: "1",
    name: "Test Board",
    background: "test-bg",
    userToken: "test-token",
    columns: [],
  };

  it("currentBoard equals to new assined board after calling setCurrentBoard function", async () => {
    const store = useBoards.getState();
    store.setCurrentBoard(board);
    expect(useBoards.getState().currentBoard).toEqual(board);
  });

  test("getBoard fetches board data and sets currentBoard", async () => {
    const store = useBoards.getState();
    const mockResponse = {
      id: "1",
      name: "Fetched Board",
      background: "fetched-bg",
      userToken: "fetched-token",
      columns: [],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;

    await store.getBoard("1");

    expect(useBoards.getState().currentBoard).toEqual(mockResponse);
    expect(global.fetch).toHaveBeenCalledWith(`${BOARDS_URL}/1`);
  });

  it("add new board to boards after calling createBoard function", async () => {
    useBoards.setState({ boards: [] });

    const store = useBoards.getState();
    const mockResponse = {
      ...board,
      id: "2",
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;

    await store.createBoard(mockResponse);

    expect(global.fetch).toHaveBeenCalledWith(BOARDS_URL, {
      method: "POST",
      body: JSON.stringify(mockResponse),
    });
  });

  it("updates board name after calling updateBoard function", async () => {
    const store = useBoards.getState();
    const mockId = "1";
    const mockNewValue = "New Board Name";
    const board = store.boards?.find((b) => b.id === mockId);
    if (board) {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          body: JSON.stringify({ name: mockNewValue }),
        })
      ) as jest.Mock;

      const promise = store.updateName(mockId, mockNewValue);

      expect(useBoards.getState().loadingId).toBe(mockId);

      await promise;

      expect(board?.name).toBe(mockNewValue);

      expect(useBoards.getState().loadingId).toBeNull();
    }
  });

  it("sets loadingId when fetching boards", async () => {
    const store = useBoards.getState();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    ) as jest.Mock;

    await store.setUserBoards("test-token");

    expect(useBoards.getState().loading).toBe(false);
    expect(useBoards.getState().loadingId).toBeNull();
  });

  it("deletes board from boards after calling deleteBoard function", async () => {
    const store = useBoards.getState();
    const boards = store.boards;
    useBoards.setState({ boards: [board] });

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;

    await store.deleteBoard(board.id);

    expect(global.fetch).toHaveBeenCalledWith(`${BOARDS_URL}/${board.id}`, {
      method: "DELETE",
    });

    if (board) {
      expect(boards).toEqual([]);
    }
  });
});
