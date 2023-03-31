import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/todoSlice';

const EditTodoForm = ({ id, title, toggleEditMode }) => {
    const [value, setValue] = useState(title);
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        if (value) {
            dispatch(
                editTodo({
                    id,
                    title: value,
                })
            );
            toggleEditMode();
        } else {
            alert('Input fields are empty');
        }
    };

    return (
        <div className='modal'>
            <form onSubmit={onSubmit} className='edit-todo-form'>
                <div className='edit-input-container'>
                    <h2 style={{ textAlign: 'center'}}>Edit Form</h2>
                    <br />
                    <input
                        type='text'
                        className='my-input'
                        placeholder='edit todo...'
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    ></input> <br /> <br />

                   <div className='save-todo-cta'>
                   <button type='submit' className='save-todo-btn'>
                        Save
                    </button>

                    <button className='cancel-todo-btn' onClick={toggleEditMode}>
                        Cancel
                    </button>
                   </div>
                </div>
            </form>
        </div>
    );
};

export default EditTodoForm;
