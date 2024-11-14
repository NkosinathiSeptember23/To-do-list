import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the input value is empty or only whitespace
    if (value.trim() === '') {
      alert('Please enter a task'); // Display an alert or handle this as needed
      return;
    }

    // Add the task if it is not empty
    addTodo(value);
    setValue(''); // Clear the input field after adding the task
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type="text"
        className='todo-input'
        value={value}
        placeholder='Add your task'
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>Add</button>
    </form>
  );
};

export default TodoForm;
