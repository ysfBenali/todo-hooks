import React, { useContext } from 'react';
import Form from './Form';
import { Context } from '../App';



const Home = () => {
    const dispatch = useContext(Context);

    return (
        // <Form addTodo={todo => { addTodo(todo) }} />
        <Form dispatch={dispatch}/>
    )
}

export default Home;