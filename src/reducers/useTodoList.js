import { useEffect, useReducer } from 'react';
import db from '../firebase/firebase';

export const Actions = {
    INIT_TODOS: "INIT_TODOS",
    ADD_TODO: "ADD_TODO",
    DELETE_TODO: "DELETE_TODO",
    TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
    DELETE_ALL_TODOS: "DELETE_ALL_TODOS",
    EDIT_TODO: "EDIT_TODO"
}

const reducer = (state, action) => {

    const { type, payload } = action;
    let todosRef = db.collection('todos');
    let updatedTodos = [];

    switch (type) {
        case Actions.ADD_TODO:
            todosRef.add(payload);
            return [...state, payload];

        case Actions.DELETE_TODO:
            todosRef.doc(payload).delete();
            return state.filter(todo => todo.id !== payload)

        case Actions.TOGGLE_COMPLETED:
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

        case Actions.DELETE_ALL_TODOS:
            state.map(todo =>
                todosRef.doc(todo.id).delete()
            )
            return [...state];

        case Actions.EDIT_TODO:
            let updateTodo = payload;
            updatedTodos = state.map(todo => {
                if (todo.id === updateTodo.id) {
                    todosRef.doc(todo.id).update(updateTodo);
                    return updateTodo;
                }
                return todo;
            });
            return [...state];

        case Actions.INIT_TODOS:
            return [...payload];
        default:
            return [...state];
    }

}

export const useTodoList = () => {

    const [todos, changeTodos] = useReducer(reducer, null);

    useEffect(() => {
        let unsubscribe = db.collection('todos').onSnapshot(snapshot => {
            changeTodos({
                type: Actions.INIT_TODOS,
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
