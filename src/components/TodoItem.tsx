import { useTodosContext } from "../hooks/useTodosContext";
import { Todo } from "../interfaces/interfaces";

type todoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: todoItemProps) {
  const { toggleTodo } = useTodosContext();
  const done = todo.completed ? "Undone" : "Done";
  return (
    <li className=" group cursor-pointer grid grid-rows-1 grid-flow-col  my-2 py-2 px-3 rounded-lg w-full bg-ssTheme-dark font-semibold ">
      <p
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "gray" : "",
        }}
        className="w-fit text-ssTheme-yellow group-hover:text-ssTheme-darkYellow"
      >
        {todo.description}
      </p>
      <span
        className="  w-fit invisible group-hover:visible justify-self-end text-ssTheme-purple hover:underline"
        onClick={() => {
          toggleTodo(todo.id);
        }}
      >
        {done}
      </span>
    </li>
  );
}
