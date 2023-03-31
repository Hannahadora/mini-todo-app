import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';
import EditTodoForm from './EditTodoForm';


const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleComplete({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id: id }));
	};

	const [showEdit, setShowEdit] = useState()

	return (
		<>
			<li className={` ${completed && 'line-through'}`}>
				<div>
					<span className='check-title'>
						<input
							type='checkbox'
							className='check-class'
							checked={completed}
							onClick={handleCheckboxClick}
						></input>
						{title}
					</span>
					<div>
						<button onClick={() => setShowEdit(!showEdit)} className='edit-btn'>
							/
						</button>
						<button onClick={handleDeleteClick} className='delete-btn'>
							x
						</button>
					</div>
				</div>
			</li>
			{showEdit && <EditTodoForm id={id} completed={completed} toggleEditMode={setShowEdit} title={title} />}
		</>
	);
};

export default TodoItem;