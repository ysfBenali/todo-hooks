import React from 'react';
import Form from './Form';

const Home = ({addTodo}) => {

    return (
        <Form addTodo={todo => { addTodo(todo) }} />
    )
}

export default Home;