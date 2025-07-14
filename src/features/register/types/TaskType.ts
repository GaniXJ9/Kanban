type Id = number | string;

export interface TaskType {
  id: Id;
  taskTitle: string;
  date: string;
  comments: [];
  background?: null;
}
