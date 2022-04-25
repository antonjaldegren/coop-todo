import React from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";


function App() {
	return (
		<div className="App">
			<h1>COOP TODO</h1>
			<InputForm />
			<TodoList />
		</div>
	);
}

export default App;
