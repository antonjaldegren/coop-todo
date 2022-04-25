import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "../recoil/todos/atom";
import { createTodo } from "../utils";

function InputForm() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useRecoilState(todosState);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, createTodo(input)]);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={({ target }) => setInput(target.value)}
        type="text"
      />
      <button>Add</button>
    </form>
  );
}

export default InputForm;
