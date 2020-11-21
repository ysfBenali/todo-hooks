import React, { useEffect, useContext } from 'react'
import { Task } from './Task';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-components/CustomButton';
import { TodoContext } from '../App';

const theme = {
    bg_add: "#4fc08d",
    bg_del: "#f03f3f"
}

const Tasks = ({ todos, filter, searchTerm, visibleTodos }) => {
    const { dispatch } = useContext(TodoContext);

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
                    visibleTodos(todos, filter, searchTerm).map((todo, index) =>
                        <Task key={index} index={index} todo={todo} />
                    )
                }
            </div>
            {(todos.length > 0) ?
                <div className='delete-state'>
                    <CustomButton theme={{ bg: '#f03f3f' }} onClick={() => dispatch({ type: 'DELETE_ALL_TODOS' })} > Delete All </CustomButton>
                </div> : <div className='empty-state'>
                    <h2>Start your day by adding some tasks !</h2>
                    <Link to='/create'>
                        <CustomButton theme={{ bg: '#4fc08d' }}> Add new Task </CustomButton>
                    </Link>
                </div>
            }

        </>
    )
}

export default Tasks;
