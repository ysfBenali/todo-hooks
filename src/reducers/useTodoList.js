import React, { useEffect, useReducer } from 'react';
import db from '../firebase/firebase';

const reducer = (state, action) => {

    const { type, payload } = action;
    let todosRef = db.collection('todos');

    switch (type) {
        case 'ADD_TODO':
            todosRef.add(payload);
            return [...state, payload];

        case 'DELETE_TODO':
            todosRef.doc(payload).delete();
            return state.filter(todo => todo.id !== payload);

        case 'TOGGLE_COMPLETED':
            const todoRef = todosRef.doc(payload);
            return state.map(todo => {
                if (todo.id === payload) {
                    todoRef.update({ completed: !todo.completed });
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            });

        case 'DELETE_ALL_TODOS':
            state.map(todo =>
                todosRef.doc(todo.id).delete()
            )
            return [...state];

        case 'EDIT_TODO':
            const updateTodo = payload;
            const updateTodos = state.map(todo => {
                if (todo.id === updateTodo.id) {
                    todosRef.doc(todo.id).update(updateTodo);
                    return updateTodo;
                }
                return todo;
            });
            return [...updateTodos];
            
        case 'INIT_TODO':
            return [...payload];
        default:
            return [...state];
    }

}

const useTodoList = () => {

    const [todos, changeTodos] = useReducer(reducer, null);

    useEffect(() => {
        db.collection('todos').onSnapshot(snapshot => {
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
    }, [])

    return [todos, changeTodos];
}

export default useTodoList;