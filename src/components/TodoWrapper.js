import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo'
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {
  // State to manage the list of todos
  const [todos, setTodos] = useState([])

  // Function to add a new todo
  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos)
  }

  // Function to toggle the completed status of a todo by its ID
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }
  
  // Function to delete a todo by its ID
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Function to toggle the editing mode for a todo by its ID
  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  // Function to update the task description of a todo in editing mode
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      ))
    }
  return (
    <div className='TodoWrapper'>

      <h1>To-Do-List</h1>
       {/* Render the form for adding new todos and pass addTodo function as prop */}
      <TodoForm addTodo={addTodo}/>

      {/* Map over todos array and render each todo item */}
      {todos.map((todo, index) =>(
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
        ): (
        <Todo task={todo} key={index}
         toggleComplete={toggleComplete}
         deleteTodo={deleteTodo}
         editTodo={editTodo}/>
        )
         
      ))}

    </div>
  )
}

export default TodoWrapper
