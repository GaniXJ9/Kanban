export interface TaskType {
  id: number;
  date: string;
  taskTitle: string;
  comments: [];
  background?: null;
}

export interface ColumnType {
  id: number;
  columnName: string;
  taskList: any;
}

export interface BoardType {
  id: number;
  title: string;
  background: string;
  user: string;
  columns: ColumnType[];
}
