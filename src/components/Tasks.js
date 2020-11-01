import React from 'react'
import { Task } from './Task';

const Tasks = ({ todos, filterDisplay, searchTerm, filter, visibleTodos }) => {
    return (
        <div className='tasks'>
            {searchTerm.length < 1 ?
                visibleTodos(todos, filter).map((todo, index) => <Task key={index} index={index} todo={todo} />)
                : visibleTodos(filterDisplay, filter).map((todo, index) => <Task key={index} index={index} todo={todo} />)
            }
        </div>
    )
}

export default Tasks;
