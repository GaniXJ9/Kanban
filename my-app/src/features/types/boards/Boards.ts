import type { Id } from "../../../shared/type/IdType";
import type { BoardEntity } from "./BoardEntity";

export interface Boards {
  boards: BoardEntity[];
  currentBoard: BoardEntity | null;
  setUserBoards: (userToken: string) => void;
  createBoard: (board: BoardEntity) => void;
  getBoard: (id: Id) => void;
  deleteBoard: (id: Id) => void;
  updateName: (currentBoard: BoardEntity, newValue: string) => void;
  setCurrentBoard: (board: BoardEntity | null) => void;
}
