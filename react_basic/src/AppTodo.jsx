import './App.css';
import { useState } from 'react';
import TodoList from './components/todo/TodoList';

export default function AppTodo(props) {

  const [todos, setTodos] = useState([
  { id: 0, label: 'HTML/CSS 공부하기' },  
  { id: 1, label: 'JS 공부하기' },  
  ]);

  return (
    <div>
      <h2>할일목록</h2>
      <TodoList todos={todos}/>
      <TodoList todos={todos}/>
    </div>
  )
}
