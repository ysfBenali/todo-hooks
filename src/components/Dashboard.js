import React, { useState } from 'react';
import AddCircleButton from '../custom-components/AddCircleButton';
import { Task } from './Task';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom';

const Dashboard = ({todos, deleteTodo}) => {
    const [showForm, setshowForm] = useState(false);

    return (
        <>
            <Link to='/create'>
                <AddCircleButton color='primary' aria-label='add to shopping cart' onClick={() => { setshowForm(!showForm) }}>
                    <AddCircleIcon style={{ fontSize: '3rem' }} />
                </AddCircleButton>
            </Link>
            <div className='tasks'>
                {todos.map((todo, index) => <Task key={index} index={index} todo={todo} deleteTodo={deleteTodo}/>)}
            </div>
        </>
    )
}

export default Dashboard;
