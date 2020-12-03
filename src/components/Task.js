import React, { useContext } from 'react'
import { Actions } from '../reducers/useTodoList';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Badge from '../custom-components/Badge';
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { TodoContext } from '../App';

export const Task = ({ index, todo }) => {
    const { dispatch } = useContext(TodoContext);

    const [props, set] = useSpring(() => ({ opacity: 1 }))

    const deleteSingleTask = () => {
        set({ opacity: 0.1, transition: 'all 0.4s ease-out' })
        setTimeout(() => dispatch({ type: Actions.DELETE_TODO, payload: todo.id })
            , 300)
    }
   
    return (
        <SingleTask style={props} completed={todo.completed}>
            <Start>
                <Checkbox
                    icon={<CircleUnchecked style={{ fontSize: 35, color: 'green' }} />}
                    checked={todo.completed}
                    checkedIcon={<CircleChecked style={{ fontSize: 35, color: 'green' }} />}
                    onClick={() => dispatch({ type: Actions.TOGGLE_COMPLETED, payload: todo.id })}
                />
            </Start>
            <Middle>
                <Top completed={todo.completed}>
                    <h5>{todo.task}</h5>
                </Top>
                <Bottom>
                    <Badge type={todo.type}>
                        {todo.type}
                    </Badge>
                </Bottom>
            </Middle>
            <End>
                <IconButton onClick={deleteSingleTask} >
                    <ClearIcon style={{ alignSelf: 'flex-start', fontSize: 35, color: 'red' }} />
                </IconButton>
                <Link to={`/edit/${todo.id}`}>
                    <div style={{ alignSelf: 'flex-end', color: '#1f97fa', fontSize: 25 }} onClick={() => dispatch({ type: Actions.EDIT_TODO, payload: todo })}>
                        <FaRegEdit />
                    </div>
                </Link>
            </End>
        </SingleTask>
    )
}

const SingleTask = styled(animated.div)`
    position: relative; 
    display: flex;
    opacity:  1;
    flex-direction: row;
    overflow: hidden;
    flex-flow: row ;
    align-items: space-around;
    
    margin:10px auto;
    
    height: 11rem;
    width: 70%;

    box-sizing: content-box;
    border-radius:6px;
    -webkit-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
    box-shadow: 0 1px 5px 0 rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
    background-color: ${props => props.completed && '#e0dede'};
    @media (max-width: 1200px) {
        width: 80%;
     }

     @media (max-width: 680px) {
        width: 100%;
        height: 9rem;
     }
     
     &:hover {
        box-shadow: 0 8px 26px 0 rgba(0,0,0,.09);
        transform: scale(1.03);
        transition: transform 450ms;
    }
`
const Start = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`
const Middle = styled.div`
    display : flex;
    flex: 5;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    word-break:break-all;
`
const Top = styled.span`
    display: flex;
    flex:1;
    font-size: 1.2em;
    align-items: center;
    &> h5 {
        text-decoration: ${props => props.completed && 'line-through black'};
    }
`
const Bottom = styled.span`
    display: flex;
    flex:1;
    align-items: center;
 `
const End = styled.div`
    display: inline-flex;
    justify-content: space-between;
    padding-bottom: .5rem;
    flex-direction: column;
`


