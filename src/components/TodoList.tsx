import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todoState } = useContext(TodoContext);
  const { todos } = todoState;
  console.log(todoState);

  return (
    <div>
      <ul>
        {todos.map((currentTodo) => (
          <TodoItem key={currentTodo.id} todo={currentTodo} />
        ))}
      </ul>
    </div>
  );
}
