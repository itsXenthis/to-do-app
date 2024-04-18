import React from "react"
import { TodoItem } from "./Item"
export const TodoList = ({ todos,toggleTodo , deleteTodo}) => {
  
  return (
    <ul style={{"list-style": 'none'}}>
      {todos?.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={ deleteTodo } />
      ))}
    </ul>
  )

}
