import { Todo } from "../interfaces/interfaces";

type todoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: todoItemProps) {
  const handleDBClick = () => {
    console.log("DoubleClick to:  ", todo.description);
  };
  return <div onDoubleClick={handleDBClick}>{todo.description}</div>;
}
