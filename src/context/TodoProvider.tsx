import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      description: "First TODO",
      completed: false,
    },
    { id: "2", description: "Second TODO", completed: false },
  ],
  completed: 0,
  pending: 2,
};

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

export default function TodoProvider({ children }: TodoProviderProps) {
  return (
    <TodoContext.Provider value={INITIAL_STATE}>
      {children}
    </TodoContext.Provider>
  );
}
