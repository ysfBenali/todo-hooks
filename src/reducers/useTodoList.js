import React, {useReducer} from 'react';

const reducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case 'ADD_TODO':
            return [...state, payload];
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== payload);
        case 'TOGGLE_COMPLETED':
            return state.map(todo => {
                if (todo.id === payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            });
        case 'EDIT_TODO':
            const updateTodo = payload;
            const updateTodos = state.map(todo => {
                if (todo.id === updateTodo.id) {
                    return updateTodo;
                }
                return todo;
            });
            return updateTodos;
        // case 'DONE_TODOS':
        //     let done_todos = state.filter(todo => todo.completed);
        //     return [...state, done_todos];
        default:
            return [...state];
    }

}
const useTodoList = () => {
    const [todos, changeTodos] = useReducer(reducer, []);
    return [todos , changeTodos];
}

export default useTodoList;