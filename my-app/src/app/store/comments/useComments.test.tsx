import useComments from ".";
import type { BoardEntity } from "../../../features/types/boards/BoardEntity";
import type { ColumnEntity } from "../../../features/types/columns/ColumnEntity";
import type { CommentEntity } from "../../../features/types/comments/CommentEntity";
import type { TaskEntity } from "../../../features/types/tasks/TaskEntity";
import useBoards from "../boards";
import useTasks from "../tasks";

describe("useCemmnts store", () => {
  const mockComment: CommentEntity = {
    id: "comment-1",
    text: "Test Comment",
    date: new Date(),
    user: {
      username: "testuser",
      email: "testuser",
      password: "testuser",
      confirmPassword: "testuser",
      token: "testuser",
      boards: [],
    },
  };

  const mockTask: TaskEntity = {
    id: "task-1",
    name: "Test Task",
    date: Date.now(),
    deadline: null,
    description: "",
    importance: null,
    background: null,
    comments: [],
  };

  const mockColumn: ColumnEntity = {
    id: "col-1",
    name: "Test Column",
    tasks: [mockTask],
  };

  const mockBoard: BoardEntity = {
    id: "board-1",
    name: "Test Board",
    columns: [mockColumn],
    background: "",
    userToken: "",
  };

  it("commentLoadId should be null by default", () => {
    const { commentLoadId } = useComments.getState();
    expect(commentLoadId).toBeNull();
  });

  it("addComment adds comment to task and updates board/tasks store", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    ) as jest.Mock;

    useBoards.setState({ currentBoard: mockBoard });
    const store = useComments.getState();

    await store.addComment(mockBoard, mockColumn, mockTask, mockComment);

    const updatedBoard = useBoards.getState().currentBoard!;
    const updatedTask = updatedBoard.columns[0].tasks[0];
    const taskInStore = useTasks.getState().currentTask;

    expect(updatedTask.comments).toContainEqual(mockComment);
    expect(taskInStore?.comments).toContainEqual(mockComment);
    expect(useComments.getState().commentLoadId).toBeNull();
  });

  it("deleteComment removes comment from task and updates board/tasks store", async () => {
    const taskWithComment = {
      ...mockTask,
      comments: [mockComment],
    };
    const columnWithTask = {
      ...mockColumn,
      tasks: [taskWithComment],
    };
    const boardWithComment = {
      ...mockBoard,
      columns: [columnWithTask],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    ) as jest.Mock;

    useBoards.setState({ currentBoard: boardWithComment });

    const store = useComments.getState();
    await store.deleteComment(
      boardWithComment,
      columnWithTask,
      taskWithComment,
      mockComment.id
    );

    const updatedBoard = useBoards.getState().currentBoard!;
    const updatedTask = updatedBoard.columns[0].tasks[0];
    const taskInStore = useTasks.getState().currentTask;

    expect(updatedTask.comments).not.toContainEqual(mockComment);
    expect(taskInStore?.comments).not.toContainEqual(mockComment);
  });
});
