import React, { Component, useContext } from 'react'
import styled, { css } from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Badge from '../custom-components/Badge';
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TodoContext } from '../App';


export const Task = ({ index, todo }) => {
    const { dispatch } = useContext(TodoContext);

    return (
        <SingleTask>
            <Start>
                {/* <input type="radio"></input> */}
                <Checkbox
                    icon={<CircleUnchecked style={{ fontSize: 35, color: 'green' }} />}
                    checked={todo.completed}
                    checkedIcon={<CircleChecked style={{ fontSize: 35, color: 'green' }} />}
                    onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id })}
                />
            </Start>
            <Middle>
                <Top>
                    <h5>{todo.task}</h5>
                </Top>
                <Bottom>
                    <Badge type={todo.type}>
                        {todo.type}
                    </Badge>
                </Bottom>
            </Middle>
            <End>
                <IconButton >
                    <ClearIcon style={{ fontSize: 35, color: 'red' }} onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })} />
                </IconButton>
                {/* edit div */}
                <Link to={`/edit/${todo.id}`}>
                    <div style={{ marginTop: '3rem', color: '#1f97fa', fontSize: 25 }} onClick={() => dispatch({ type: 'EDIT_TODO', payload: todo })}>
                        <FaRegEdit />
                    </div>
                </Link>
            </End>
            {/* <div className="title"></div>

           <div className="type"></div> */}

        </SingleTask>
    )
}

const SingleTask = styled.div`
    position: relative; 
    display: flex;
    
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
    box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
    transition: transform 450ms;

    @media (max-width: 1200px) {
        width: 80%;
     }

     @media (max-width: 680px) {
        width: 100%;
        height: 9rem;
     }
     
     &:hover {
        transform: scale(1.08);
    }
`
const Start = styled.div`
    display: flex;
    flex: 1;
     /* background-color: red; */
    align-items: center;
    justify-content: center;
`
const Middle = styled.div`
    display : flex;
    flex: 5;
    flex-direction: column;
    justify-content: center;

    align-items: flex-start;
     /* background-color: green; */
    /* margin-bottom: 1rem; */

    word-break:break-all;
`
const Top = styled.span`
    display: flex;
    flex:1;
     /* background-color: blue; */
    align-items: center;
`
const Bottom = styled.span`
    display: flex;
    flex:1;
     /* background-color: gray; */
    align-items: center;
 /* margin-bottom: 1em; */
 `
const End = styled.div`
    background-color: pink;
    flex-direction: column;
`


