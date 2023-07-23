import { useTodosContext } from "../hooks/useTodosContext";

export default function TitlePendingTodos() {
  const { pendingTodos } = useTodosContext();
  return (
    <h2 className=" text-4xl mb-4 cursor-default text-white/80">
      Pending <span className="text-3xl font-medium">TODOS</span>:{" "}
      <span className=" text-ssTheme-purple hover:text-ssTheme-darkPurple">
        {pendingTodos}
      </span>{" "}
    </h2>
  );
}
