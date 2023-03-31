import React from 'react';
import { useSelector } from 'react-redux';


const ProgressBar = () => {
	const todos = useSelector((state) =>
	  state.todos.filter((todo) => todo.completed === true)
	);
	const totalTodos = useSelector((state) => state.todos);
  
	const progress = (todos?.length / totalTodos?.length) * 100 || 0;
  
	return (
	  <div className="progress-bar-container">
		<div className="progress-bar" style={{ width: `${progress}%` }}>
		  &nbsp;{todos?.length} of {totalTodos?.length} done
		</div>
	  </div>
	);
  };
  

export default ProgressBar;