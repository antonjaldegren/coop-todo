import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "../recoil/todos/atom";

function InputForm() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useRecoilState(todosState);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={({ target: { value } }) => setInput(value)}
        type="text"
      />
      <button>Add</button>
    </form>
  );
}

export default InputForm;
