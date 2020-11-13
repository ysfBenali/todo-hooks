import React, { useEffect, useReducer } from 'react';
import db from '../firebase/firebase';

const reducer = (state, action) => {

    const { type, payload } = action;
    let todosRef = db.collection('todos');
    let updatedTodos = [];

    switch (type) {
        case 'ADD_TODO':
            todosRef.add(payload);
            return [...state, payload];

        case 'DELETE_TODO':
            todosRef.doc(payload).delete();
            return state.filter(todo => todo.id !== payload);

        case 'TOGGLE_COMPLETED':
            let todoRef = todosRef.doc(payload);
            updatedTodos = state.map(todo => {
                if (todo.id === payload) {
                     todoRef.update({ completed: !todo.completed });
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            });
            return [...updatedTodos];

        case 'DELETE_ALL_TODOS':
            state.map(todo =>
                todosRef.doc(todo.id).delete()
            )
            return [...state];

        case 'EDIT_TODO':
            let updateTodo = payload;
            updatedTodos = state.map(todo => {
                if (todo.id === updateTodo.id) {
                    todosRef.doc(todo.id).update(updateTodo);
                    return updateTodo;
                }
                return todo;
            });
            return [...state];

        case 'INIT_TODO':
            console.log("init !!");
            return [...payload];
        default:
            return [...state];
    }

}

const useTodoList = () => {

    const [todos, changeTodos] = useReducer(reducer, null);

    useEffect(() => {
        let unsubscribe = db.collection('todos').onSnapshot(snapshot => {
            console.log("updated todos !");
            changeTodos({
                type: 'INIT_TODO',
                payload: snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        ...doc.data()
                    }
                ))
            });
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return [todos, changeTodos];
}

export default useTodoList;