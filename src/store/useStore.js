import React from 'react'

const useStore = () => {

    const [todos, changeTodos] = useTodoList();
    const [filter, changeFilter] = useTodoList();


    const state = { todos, filter };

    const reducers = { changeFilter, changeTodos };

    return (
        <div>

        </div>
    )
}

export default useStore
