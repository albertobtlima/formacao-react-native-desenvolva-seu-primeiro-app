import { useContext } from "react";
import { TaskContext } from "./TaskProvader";

export default function useTaskContext() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("Tentando acessar o contexto fora do TasksProvider");
  }

  return context;
}
