import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { todosState } from '../recoil/todos/atom';

function Todo({ todo }) {
	const [todos, setTodos] = useRecoilState(todosState);

	function handleRemove() {
		setTodos(todos.filter((t) => t.id !== todo.id));
	}

	function toggleCompleted() {
		setTodos(
			[...todos].map((t) =>
				t.id !== todo.id ? t : { ...t, completed: !t.completed }
			)
		);
	}

	return (
		<div className={`todo ${todo.completed ? 'completed' : ''}`}>
			<input type="checkbox" onChange={toggleCompleted} />
			<h2 className="title">{todo.text}</h2>
			<BsFillTrashFill onClick={handleRemove} />
		</div>
	);
}

export default Todo;
