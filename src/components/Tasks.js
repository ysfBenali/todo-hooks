import React, { useContext } from 'react';
import { Actions } from '../reducers/useTodoList';
import { Task } from './Task';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-components/CustomButton';
import { TodoContext } from '../App';

const Tasks = ({ todos, filter, searchTerm, visibleTodos }) => {
    const { dispatch } = useContext(TodoContext);
    return (
        <>
            <div className='tasks'>
                {
                    visibleTodos(todos, filter, searchTerm).map((todo, index) =>
                        <Task todo={todo} />
                    )
                }
            </div>
            {(todos.length > 0) ?
                <div className='delete-state'>
                    <CustomButton theme={{ bg: '#f03f3f' }} onClick={() => dispatch({ type: Actions.DELETE_ALL_TODOS })} > Delete All </CustomButton>
                </div> : <div className='empty-state'>
                    <h2>Start your day by adding some tasks !</h2>
                    <Link to='/create'>
                        <CustomButton theme={{ bg: '#1abc9c' }}> Add new Task </CustomButton>
                    </Link>
                </div>
            }

        </>
    )
}

export default Tasks;
