import React, { useState, useContext } from 'react';
import AddCircleButton from '../custom-components/AddCircleButton';
import { Task } from './Task';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom';
import { Context } from '../App';

const Dashboard = () => {

    const {todos} = useContext(Context);
    const [showForm, setshowForm] = useState(false);

    return (
        <>
            <Link to='/create'>
                <AddCircleButton color='primary' onClick={() => { setshowForm(!showForm) }}>
                    <AddCircleIcon style={{ fontSize: '3rem' }} />
                </AddCircleButton>
            </Link>
            <div className='tasks'>
                {todos.map((todo, index) => <Task key={index} index={index} todo={todo} />)} 
            </div>
        </>
    )
}

export default Dashboard;
