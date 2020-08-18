import React, {useState} from 'react';

export const useTodo = initialValues => {
    const [todos, setTodos] = useState(initialValues)
    return {
        todos,
        addTodo : newTodo => {
            setTodos([...todos, newTodo]);
        },
        deleteTodo : todoIndex => {
            const newTodos = todos.filter((_,index) => index !== todoIndex);
            setTodos(newTodos);
        } 
    }
}
