import React, { useContext } from 'react';
import Form from './Form';
import { Context } from '../App';



const Home = ({ match }) => {
    const dispatch = useContext(Context);
        console.log(match.params);

    return (
        // <Form addTodo={todo => { addTodo(todo) }} />
        <Form dispatch={dispatch}/>
    )
}

export default Home;