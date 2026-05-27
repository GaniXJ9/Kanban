import type { Id } from "../../../shared/type/";
import type { BoardEntity } from "./board-entity";

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
