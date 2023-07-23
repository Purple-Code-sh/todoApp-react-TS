import { useTodosContext } from "../hooks/useTodosContext";
import TitlePendingTodos from "./TitlePendingTodos";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useTodosContext();

  return (
    <div>
      <TitlePendingTodos />
      <ul className=" bg-ssTheme-darker w-80 py-2 px-3 rounded-lg">
        {todos.map((currentTodo) => (
          <TodoItem key={currentTodo.id} todo={currentTodo} />
        ))}
      </ul>
    </div>
  );
}
