import React, { useState, useReducer } from 'react';
import { useTodo } from './custom-hooks/useTodo';
import './App.css';
import { StylesProvider } from '@material-ui/styles';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddTodo from './components/AddTodo';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.css';
import EditTodo from './components/EditTodo';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
const EDIT_TODO = 'EDIT_TODO';


function appReducer(state, action) {

  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      console.log(payload);
      return [...state, payload];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== payload);
    case TOGGLE_COMPLETED:
      return state.map(todo => {
        if (todo.id === payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    case EDIT_TODO:
      const updateTodo = payload;
      const updateTodos = state.map(todo => {
        if (todo.id === updateTodo.id) {
          return updateTodo;
        }
        return todo;
      })
      return  updateTodos;
    default:
      return [...state];
  }
}

// context
export const Context = React.createContext();

function App() {

  const [showForm, setshowForm] = useState(false);
  const { todos, addTodo, deleteTodo } = useTodo([]);

  //global state improuvement 
  const [state, dispatch] = useReducer(appReducer, []);
  // const { todos, addTodo, deleteTodo } = useTodo([]);
  return (
    <Context.Provider value={{ dispatch: dispatch, todos: state }}>
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