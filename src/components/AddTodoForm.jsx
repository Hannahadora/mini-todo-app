import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodo({
					title: value,
				})
			);

			setValue('')

		} else {
			alert('Input fields are empty')
		}
	};

	return (
		<form onSubmit={onSubmit} className='add-todo-form'>
			<div className='add-input-container'>
				<input
					type='text'
					className='my-input'
					placeholder='add todo...'
					value={value}
					onChange={(event) => setValue(event.target.value)}
				></input>

				<button type='submit' className='add-todo-btn'>
					+
				</button>
			</div>
		</form>
	);
};

export default AddTodoForm;
