// import React, { useContext } from 'react';
// import AddTodo from './AddTodo';
// import { useParams } from 'react-router-dom';
// import { Context } from '../App';
// import EditTodo from './EditTodo';

// const getTodo = (todos, id) => {
//     todos.map(todo => {
//         if (todo.id === id) {
//             // console.log(todo);
//             return todo;
//         }
//         return null;
//     });
// }

// const Home = () => {
//         const { dispatch, todos } = useContext(Context);
//         // const { id } = useParams();

//         // // <Form addTodo={todo => { addTodo(todo) }} />
//         // if (id !== undefined) {
//         //     const todo = getTodo(todos, id);
//         //     return (<EditTodo dispatch={dispatch} todo={todo}/>);
//         // }
//         return (<AddTodo dispatch={dispatch} />)
//     }

//     export default Home;