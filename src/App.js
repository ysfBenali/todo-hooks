import React, { useState, useReducer, useEffect } from 'react';
import { useTodo}  from './custom-hooks/useTodo';
import useTodoList from './reducers/useTodoList';
import './App.css';
import { StylesProvider } from '@material-ui/styles';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddTodo from './components/AddTodo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EditTodo from './components/EditTodo';
import useStore from './store/useStore';
import db from './firebase/firebase';
import './styles.css';

// const ADD_TODO = 'ADD_TODO';
// const DELETE_TODO = 'DELETE_TODO';
// const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
// const EDIT_TODO = 'EDIT_TODO';
// const DONE_TODOS = 'DONE_TODOS';

// context
export const TodoContext = React.createContext();
export const FilterContext = React.createContext();


function App() {

  // const [showForm, setshowForm] = useState(false);

  //global state improuvement 
  const [{  todos, filter }, { changeTodos, changeFilter }] = useStore();
  // const [{  todos, filter }, { changeTodos, changeFilter }] = useStore();

  const [initialTodos, setInitialTodos] = useState([]);

  useEffect(() => {
    console.log("kkkkkk");
    db.collection('todos').onSnapshot(snapshot => {
      changeTodos({type: 'INIT_TODO', payload : snapshot.docs.map(doc => ({id: doc.id,...doc.data()}) )});
    })
  }, [])
  
  return (
    <TodoContext.Provider value={{ dispatch: changeTodos, todos: todos }}>
      <FilterContext.Provider value={{ changeFilter: changeFilter, filter: filter}}>
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
              <Route path='/dashboard' component={() => <Dashboard/>} />

            </Switch>
          </Router>
        </div>
      </StylesProvider>
      </FilterContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;