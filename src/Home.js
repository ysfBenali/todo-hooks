import React, { useState } from 'react'
import styled from 'styled-components';
import AddCircleButton from './custom-components/AddCircleButton';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Form } from './components/Form';
import './styles.css';
import { Task } from './components/Task';

export const Home = () => {

    const [showForm, setshowForm] = useState(false);
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
            {showForm && <Form />}
            <div className="tasks">
                {/* <Task/>
                <Task/>
                <Task/> */}
            </div>

        </div>
    )
}