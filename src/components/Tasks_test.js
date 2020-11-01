import React from 'react'

const Tasks = () => {
  return (
        <div className='tasks'>
                {searchTerm.length < 1 ?
                    visibleTodos(todos, filter).map((todo, index) => <Task key={index} index={index} todo={todo} />)
                    : visibleTodos(filterDisplay, filter).map((todo, index) => <Task key={index} index={index} todo={todo} />)
                }
            </div>
    )
}

export default Tasks
