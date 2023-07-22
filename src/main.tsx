import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
//Context
import TodoProvider from "./context/TodoProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
