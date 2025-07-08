export interface ColumnType {
  id: number;
  columnName: string;
  taskList: [];
}

export interface BoardType {
  id: string;
  title: string;
  background: string;
  user: string;
  columns: ColumnType[];
}
