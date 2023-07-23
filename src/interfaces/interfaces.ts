export interface Todo {
  id: string;
  description: string;
  completed: boolean;
}

export interface TodoState {
  todoCount: number;
  todos: Todo[];
  completed: number;
  pending: number;
}

export type todoContextProps = {
  todoState: TodoState;
  toggleTodo: (id: string) => void;
};
