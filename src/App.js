import React, { useState } from 'react';
import { useTodo } from './custom-hooks/useTodo';
import './App.css';
import { StylesProvider } from '@material-ui/styles';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.css';

function App() {

  const [showForm, setshowForm] = useState(false);
  const { todos, addTodo, deleteTodo } = useTodo([]);

  // const { todos, addTodo, deleteTodo } = useTodo([]);
  return (
    <StylesProvider injectFirst >
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={() => <Home addTodo={addTodo}/>} />
            <Route path='/create' component={() => <Home addTodo={addTodo}/>} />
            <Route path='/dashboard' component={() => <Dashboard todos={todos} deleteTodo={deleteTodo} />} />
          </Switch>
        </Router>
      </div>
    </StylesProvider>
  );
}

export default App;