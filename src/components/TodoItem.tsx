import { useTodosContext } from "../hooks/useTodosContext";
import { Todo } from "../interfaces/interfaces";

type todoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: todoItemProps) {
  const { toggleTodo } = useTodosContext();
  return (
    <li
      className=" cursor-pointer list-item my-2 p-2 rounded-lg w-full bg-ssTheme-dark font-semibold text-ssTheme-yellow hover:text-ssTheme-darkYellow"
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
      onDoubleClick={() => {
        toggleTodo(todo.id);
      }}
    >
      {todo.description}
    </li>
  );
}
