import type { Id } from "../../../shared/type/IdType";
import type { BoardEntity } from "./BoardEntity";

export interface Boards {
  loading: boolean;
  loadingId: Id | null;
  boards: BoardEntity[] | null;
  currentBoard: BoardEntity | null;
  setUserBoards: (userToken: string) => void;
  createBoard: (board: BoardEntity) => void;
  getBoard: (id: Id) => void;
  deleteBoard: (id: Id) => void;
  updateName: (id: Id, newValue: string) => void;
  setCurrentBoard: (board: BoardEntity | null) => void;
}
