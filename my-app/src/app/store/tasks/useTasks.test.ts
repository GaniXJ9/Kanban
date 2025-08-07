import useTasks from ".";
import type { BoardEntity } from "../../../features/types/boards/BoardEntity";
import type { ColumnEntity } from "../../../features/types/columns/ColumnEntity";
import type { TaskEntity } from "../../../features/types/tasks/TaskEntity";
import useBoards from "../boards";

describe("useTask store", () => {
  it(" should initialize with default values", () => {
    const store = useTasks.getState();
    expect(store.tasks).toEqual([]);
    expect(store.currentTask).toBeNull();
    expect(store.taskLoadId).toBeNull();
    expect(store.filteredTasks).toEqual([]);
    expect(store.loading).toBe(false);
  });

  it("setTask sets tasks given by argument ", () => {
    const store = useTasks.getState();

    const mockTasks: TaskEntity[] = [
      {
        id: "mock-id-1",
        name: "mock-name-1",
        date: Number(new Date()),
        deadline: null,
        description: "mock-description-1",
        importance: null,
        comments: [],
        background: null,
      },
      {
        id: "mock-id-2",
        name: "mock-name-2",
        date: Number(new Date()),
        deadline: null,
        description: "mock-description-2",
        importance: null,
        comments: [],
        background: null,
      },
      {
        id: "mock-id-3",
        name: "mock-name-3",
        date: Number(new Date()),
        deadline: null,
        description: "mock-description-3",
        importance: null,
        comments: [],
        background: null,
      },
    ];

    store.setTasks(mockTasks);

    expect(useTasks.getState().tasks).toEqual(mockTasks);
  });

  it("setCurrentTask sets current task given by argument", () => {
    const store = useTasks.getState();

    const mockTask: TaskEntity = {
      id: "mock-id",
      name: "mock-name",
      date: Number(new Date()),
      deadline: null,
      description: "mock-description",
      importance: null,
      comments: [],
      background: null,
    };

    store.setCurrentTask(mockTask);

    expect(useTasks.getState().currentTask).toEqual(mockTask);
  });

  it("filterTask filters tasks based on search query", () => {
    const store = useTasks.getState();

    const mockTasks: TaskEntity[] = [
      {
        id: "1",
        name: "Task One",
        date: Number(new Date()),
        deadline: null,
        description: "First task",
        importance: null,
        comments: [],
        background: null,
      },
      {
        id: "2",
        name: "Task Two",
        date: Number(new Date()),
        deadline: null,
        description: "Second task",
        importance: null,
        comments: [],
        background: null,
      },
    ];

    store.setTasks(mockTasks);
    store.filterTask("One");

    expect(useTasks.getState().filteredTasks).toEqual([mockTasks[0]]);
  });

  it("getTasks retrieves tasks from a board", () => {
    const store = useTasks.getState();

    const mockBoard: BoardEntity = {
      id: "board-id",
      name: "Mock Board",
      columns: [
        {
          id: "column-id-1",
          name: "Column One",
          tasks: [
            {
              id: "task-id-1",
              name: "Task One",
              date: Number(new Date()),
              deadline: null,
              description: "First task",
              importance: null,
              comments: [],
              background: null,
            },
          ],
        },
        {
          id: "column-id-2",
          name: "Column Two",
          tasks: [
            {
              id: "task-id-2",
              name: "Task Two",
              date: Number(new Date()),
              deadline: null,
              description: "Second task",
              importance: null,
              comments: [],
              background: null,
            },
          ],
        },
      ],
      background: "",
      userToken: "",
    };

    store.getTasks(mockBoard);

    expect(useTasks.getState().tasks).toEqual([
      ...mockBoard.columns[0].tasks,
      ...mockBoard.columns[1].tasks,
    ]);
  });

  it("addTask adds a task to a column and updates the board", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;

    const store = useTasks.getState();

    const newTask: TaskEntity = {
      id: "new-task-id",
      name: "New Task",
      date: Date.now(),
      deadline: null,
      description: "New task description",
      importance: null,
      comments: [],
      background: null,
    };

    const mockColumn = {
      id: "column-id",
      name: "Column One",
      tasks: [],
    };

    const mockBoard = {
      id: "board-id",
      name: "Mock Board",
      columns: [mockColumn],
      background: "",
      userToken: "",
    };

    useBoards.setState({ currentBoard: mockBoard });

    await store.addTask(newTask, mockColumn, mockBoard);

    expect(useTasks.getState().tasks.map((t) => t.id)).toContain("new-task-id");

    const updatedColumn = useBoards
      .getState()
      .currentBoard?.columns.find((col) => col.id === "column-id");

    expect(updatedColumn?.tasks.map((t) => t.id)).toContain("new-task-id");
  });

  it("deleteTask removes a task from a column and updates the board", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;

    const store = useTasks.getState();

    const mockTaskId = "task-id-to-delete";
    const mockColumn = {
      id: "column-id",
      name: "Column One",
      tasks: [
        {
          id: mockTaskId,
          name: "Task to Delete",
          date: Date.now(),
          deadline: null,
          description: "Task description",
          importance: null,
          comments: [],
          background: null,
        },
      ],
    };

    const mockBoard = {
      id: "board-id",
      name: "Mock Board",
      columns: [mockColumn],
      background: "",
      userToken: "",
    };

    useBoards.setState({ currentBoard: mockBoard });

    await store.deleteTask(mockTaskId, mockColumn, mockBoard);

    expect(useTasks.getState().tasks.map((t) => t.id)).not.toContain(
      mockTaskId
    );

    const updatedColumn = useBoards
      .getState()
      .currentBoard?.columns.find((col) => col.id === "column-id");

    expect(updatedColumn?.tasks.map((t) => t.id)).not.toContain(mockTaskId);
  });

  it("updateTitle updates task name in store and board", async () => {
    const mockTask: TaskEntity = {
      id: "task-1",
      name: "Task Name",
      date: Date.now(),
      deadline: null,
      description: "Old Description",
      importance: null,
      comments: [],
      background: null,
    };

    const mockColumn: ColumnEntity = {
      id: "col-1",
      name: "Column 1",
      tasks: [mockTask],
    };

    const mockBoard: BoardEntity = {
      id: "board-1",
      name: "Board",
      columns: [mockColumn],
      background: "",
      userToken: "",
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    ) as jest.Mock;

    useBoards.setState({ currentBoard: mockBoard });

    const store = useTasks.getState();
    await store.updateTitle(mockTask, "New Title", mockColumn, mockBoard);

    const updatedTask = useTasks
      .getState()
      .tasks.find((t) => t.id === mockTask.id);
    expect(updatedTask?.name).toBe("New Title");

    const updatedBoardTask = useBoards
      .getState()
      .currentBoard?.columns[0].tasks.find((t) => t.id === mockTask.id);
    expect(updatedBoardTask?.name).toBe("New Title");
  });

  it("updateDescription updates task description in store and board", async () => {
    const mockTask: TaskEntity = {
      id: "task-1",
      name: "Task Name",
      date: Date.now(),
      deadline: null,
      description: "Old Description",
      importance: null,
      comments: [],
      background: null,
    };

    const mockColumn: ColumnEntity = {
      id: "col-1",
      name: "Column 1",
      tasks: [mockTask],
    };

    const mockBoard: BoardEntity = {
      id: "board-1",
      name: "Board",
      columns: [mockColumn],
      background: "",
      userToken: "",
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    ) as jest.Mock;

    useBoards.setState({ currentBoard: mockBoard });

    const store = useTasks.getState();
    await store.updateDescription(
      mockTask,
      "New Description",
      mockColumn,
      mockBoard
    );

    const updatedTask = useTasks
      .getState()
      .tasks.find((t) => t.id === mockTask.id);
    expect(updatedTask?.description).toBe("New Description");

    const updatedBoardTask = useBoards
      .getState()
      .currentBoard?.columns[0].tasks.find((t) => t.id === mockTask.id);
    expect(updatedBoardTask?.description).toBe("New Description");
  });

  it("updateTaskOrder updates column order and global task list", async () => {
    const mockTask: TaskEntity = {
      id: "task-1",
      name: "Task Name",
      date: Date.now(),
      deadline: null,
      description: "Old Description",
      importance: null,
      comments: [],
      background: null,
    };

    const mockColumn: ColumnEntity = {
      id: "col-1",
      name: "Column 1",
      tasks: [mockTask],
    };

    const mockBoard: BoardEntity = {
      id: "board-1",
      name: "Board",
      columns: [mockColumn],
      background: "",
      userToken: "",
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    ) as jest.Mock;

    useBoards.setState({ currentBoard: mockBoard });

    const reorderedColumns = [...mockBoard.columns].reverse();

    const store = useTasks.getState();
    await store.updateTaskOrder(reorderedColumns, mockBoard);

    const updatedBoard = useBoards.getState().currentBoard;
    expect(updatedBoard?.columns).toEqual(reorderedColumns);

    const allTasks = useTasks.getState().tasks;
    expect(allTasks.length).toBe(1);
    expect(allTasks[0].id).toBe(mockTask.id);
  });

  it("setImportance updates task importance and currentTask", async () => {
    const mockTask: TaskEntity = {
      id: "task-1",
      name: "Task Name",
      date: Date.now(),
      deadline: null,
      description: "Old Description",
      importance: null,
      comments: [],
      background: null,
    };

    const mockColumn: ColumnEntity = {
      id: "col-1",
      name: "Column 1",
      tasks: [mockTask],
    };

    const mockBoard: BoardEntity = {
      id: "board-1",
      name: "Board",
      columns: [mockColumn],
      background: "",
      userToken: "",
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    ) as jest.Mock;

    useBoards.setState({ currentBoard: mockBoard });

    const store = useTasks.getState();
    await store.setImportance("High", mockTask, mockColumn, mockBoard);

    const updatedTask = useTasks
      .getState()
      .tasks.find((t) => t.id === mockTask.id);
    expect(updatedTask?.importance).toBe("High");

    const updatedBoardTask = useBoards
      .getState()
      .currentBoard?.columns[0].tasks.find((t) => t.id === mockTask.id);
    expect(updatedBoardTask?.importance).toBe("High");

    expect(useTasks.getState().currentTask?.id).toBe(mockTask.id);
  });
});
