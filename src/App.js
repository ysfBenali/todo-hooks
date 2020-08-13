import React from 'react';
import TodoForm from './TodoForm';

import './App.css';
import useTodoState from './useTodoState';
import { TodoList } from './TodoList';
import { Home } from './Home';
import { StylesProvider } from '@material-ui/styles';

function App() {

  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <StylesProvider injectFirst>
    <div className="App">
      <Home/>
    </div>
    </StylesProvider>
  );
}

export default App;
