import React, { useState, useReducer } from 'react';
import { useTodo } from './custom-hooks/useTodo';
import './App.css';
import { StylesProvider } from '@material-ui/styles';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddTodo from './components/AddTodo';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EditTodo from './components/EditTodo';
import useTodoList from './reducers/useTodoList';
import './styles.css';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
const EDIT_TODO = 'EDIT_TODO';
const DONE_TODOS = 'DONE_TODOS';

// context
export const Context = React.createContext();

function App() {
 
  const [showForm, setshowForm] = useState(false);

  //global state improuvement 
  const [todos, dispatch] = useTodoList();

  return (
    <Context.Provider value={{ dispatch: dispatch, todos: todos }}>
      <StylesProvider injectFirst >
        <div className="App">
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact component={() => <AddTodo />} />
              <Route path='/create' component={() => <AddTodo />} />
              <Route path='/edit/:id'>
                <EditTodo />
              </Route>
              {/* <Route path='/dashboard' component={() => <Dashboard todos={todos} deleteTodo={deleteTodo} />} /> */}
              <Route path='/dashboard' component={() => <Dashboard />} />

            </Switch>
          </Router>
        </div>
      </StylesProvider>
    </Context.Provider>
  );
}

export default App;