import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className="my-3">This is a Todos List</h3>
      {props.Todos && props.Todos.length === 0 ? "No Todos to display" :
        props.Todos && props.Todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })
      }
    </div>
  )
}

export default Todos
