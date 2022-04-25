import React from "react";
import { useRecoilValue } from "recoil";
import { todosState } from "../recoil/todos/atom";
import Todo from "./Todo";

function TodoList() {
  const todos = useRecoilValue(todosState);

  return (
    <>
      {todos.map((todo) => {
        return (
        <Todo todo={todo} key={todo.id} />
        )
      })}
    </>
  );
}

export default TodoList;

r;
