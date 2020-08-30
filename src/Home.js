import React, { useState } from 'react'
import styled from 'styled-components';
import AddCircleButton from './custom-components/AddCircleButton';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Form } from './components/Form';
import './styles.css';
import { Task } from './components/Task';
import { useTodo } from './custom-hooks/useTodo';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
export const Home = () => {

    const [showForm, setshowForm] = useState(false);
    const { todos, addTodo, deleteTodo } = useTodo([]);
    return (
        <div>
            <div className="top">
                <h1>Todo for today</h1>
            </div>
            {!showForm &&
                <AddCircleButton color="primary" aria-label="add to shopping cart" onClick={() => { setshowForm(!showForm) }}>
                    <AddCircleIcon style={{ fontSize: '3rem' }} />
                </AddCircleButton>
            }
            {showForm &&
                <Form addTodo={todo => {
                    addTodo(todo);
                    setshowForm(false);
                }} />}
          {!showForm &&  <div className="tasks">
                {
                    todos.map((todos, index) => <Task />)
                }
            </div>}

        </div>
    )
}