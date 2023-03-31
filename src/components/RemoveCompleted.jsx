import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompleted } from '../redux/todoSlice';

const RemoveCompleted = () => {
  const dispatch = useDispatch();

  const completedTodos = useSelector((state) => state.todos.filter((todo) => todo.completed === true));

  const handleRemoveCompleted = () => {
    completedTodos.forEach((todo) => {
      dispatch(deleteCompleted({ completed: todo.completed }));
    });
  };

  return <button className='btn-r-checked' onClick={handleRemoveCompleted}>Remove Completed x</button>;
};

export default RemoveCompleted;

