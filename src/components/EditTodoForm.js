import React, {useState} from 'react'

// EditTodoForm component to edit an existing todo
const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

// Function to handle form submission
    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id)

        setValue("")
    }
  return (
    // Form to edit a todo item, calls handleSubmit on form submission
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='todo-btn'>Update</button>
    </form>
  )
}

export default EditTodoForm
