import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddTodo from './components/AddTodo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EditTodo from './components/EditTodo';
import NotFound from './components/NotFound';
import useStore from './store/useStore';
import './styles.css';

// context
export const TodoContext = React.createContext();
export const FilterContext = React.createContext();

function App() {
  
  //global state improuvement 
  const [{  todos, filter }, { changeTodos, changeFilter }] = useStore();
  
  return (
    <TodoContext.Provider value={{ dispatch: changeTodos, todos: todos }}>
      <FilterContext.Provider value={{ changeFilter: changeFilter, filter: filter}}>
      <StylesProvider injectFirst >
        <div className="App">
          <Router>
            <Switch>
              <Route path='/' exact component={() => <AddTodo />} />
              <Route path='/create' component={() => <AddTodo />} />
              <Route path='/edit/:id'>
                <EditTodo />
              </Route>
              <Route path='/dashboard' component={() => <Dashboard/>} />
              <Route path='*' component={() => <NotFound/>} />
            </Switch>
          </Router>
        </div>
      </StylesProvider>
      </FilterContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;