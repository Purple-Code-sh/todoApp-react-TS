import { TodoContext } from "./TodoContext";

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

export default function TodoProvider({ children }: TodoProviderProps) {
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
}
