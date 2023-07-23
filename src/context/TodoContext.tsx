import { createContext } from "react";
import { todoContextProps } from "../interfaces/interfaces";

export const TodoContext = createContext<todoContextProps>(
  {} as todoContextProps
);
