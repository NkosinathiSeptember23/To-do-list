import React, {useState} from 'react'

// TodoForm component for adding new tasks
const TodoForm = ({addTodo}) => {

  // State to manage the input value for the new task
    const [value, setValue] = useState("")

  // Function to handle form submission
    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value)

        setValue("")
    }
  return (
     // Form to add a new task, calls handleSubmit on form submission
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value={value} placeholder='Add your task' onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='todo-btn'>Add</button>
    </form>
  )
}

export default TodoForm
