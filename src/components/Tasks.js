import React, { useEffect } from 'react'
import { Task } from './Task';
import CustomButton from '../custom-components/CustomButton';

const theme = {
    bg_add: "#4fc08d",
    bg_del: "#f03f3f"
}

const Tasks = ({ filterDisplay, filter, visibleTodos }) => {

    return (
        <>
            {/* <div className='tasks'>
                {searchTerm.length < 1 ?
                    visibleTodos(todos, filter).map((todo, index) => <Task key={index} index={index} todo={todo} />)
                    : visibleTodos(filterDisplay, filter).map((todo, index) => <Task key={index} index={index} todo={todo} />)
                }
            </div> */}
            <div className='tasks'>
                {
                    visibleTodos(filterDisplay, filter).map((todo, index) => <Task key={index} index={index} todo={todo} />)
                }
            </div>
            {(filterDisplay.length > 0) ?
                <div className='delete-state'>
                    <CustomButton theme={{ bg: '#f03f3f' }}> Delete All </CustomButton>
                </div> : <div className='empty-state'>
                    <h2>Start your day by adding some tasks !</h2>
                    <CustomButton theme={{ bg: '#4fc08d' }}> Add new Task </CustomButton>
                </div>
            }

        </>
    )
}

export default Tasks;
