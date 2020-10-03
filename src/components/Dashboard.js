import React, { useState, useContext } from 'react';
import AddCircleButton from '../custom-components/AddCircleButton';
import styled, { css } from 'styled-components';
import { Task } from './Task';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '../custom-components/Button';
import { Link } from 'react-router-dom';
import { Context } from '../App';

const SearchContainer = styled.div`
position: absolute;
left: 50%;
// top:30%;
// top : 9em;

transform: translateY(-13%) translateX(-50%);
background-color: white;

display: flex;
flex-wrap: wrap;
align-items: center;

width: 30%;    
// margin : 0 auto;
margin-top : -2rem;
box-sizing: content-box;
padding: 2rem;
@media (max-width: 1200px) {
    width: 70%;    
   // flex-direction: column;
  //  justify-content: space-evenly;
  //  min-height: 400px;
}
// padding-top: 1rem;

border-radius:6px;
-webkit-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
`

const baseInputStyles = css`
display: inline-block;    
width: ${props => props.width || '100%'};
box-sizing : border-box;
height: 2.8rem !important;
border-radius: 0.2em;
border: #b5b1b1 1px solid;
outline: none;
padding: 0.75em 1.5em;
// @media (max-width: 1200px) {
//    width: 90%!important;
//    margin: 0 auto; 
// }
:focus {
    border : #00C3FF 1px solid;
}
`
const Input = styled.input`
${baseInputStyles}
`
const Select = styled.select`
${baseInputStyles}
`
const FilterContainer = styled.div`
    width : 60%;
    margin : 5rem auto 0;
    display : flex;
    justify-content: space-between;
    @media (max-width: 1200px) {
        width : 100%;
    }
`

const theme = {
    // fg: "palevioletred",
    // bg: "#4fc08d",
    bg: '#EA4C12'
}
const Dashboard = () => {

    let { dispatch, todos } = useContext(Context);
    const [showForm, setshowForm] = useState(false);

    let [todosState, setTodosState] = useState(todos)


    return (
        <>
            <Link to='/create'>
                <AddCircleButton color='primary' onClick={() => { setshowForm(!showForm) }}>
                    <AddCircleIcon style={{ fontSize: '3rem' }} />
                </AddCircleButton>
            </Link>
            <SearchContainer>
                <Input width='70%' placeholder='Search for a task' />
                <Select width='30%'>
                    <option value='' disabled selected >Sort By</option>
                    <option value='Date'>Date</option>
                    <option value='Deadline'>Deadline</option>
                </Select>
            </SearchContainer>
            <FilterContainer>
                <Button theme={theme} onClick={() => setTodosState(todos)}>All</Button>
                <Button theme={theme} onClick={() => setTodosState(todos.filter(todo => !todo.completed))}>Active</Button>
                <Button theme={theme} onClick={() => setTodosState(todos.filter(todo => todo.completed))}>Done</Button>
            </FilterContainer>
            <div className='tasks'>
                {todosState.map((todo, index) => <Task key={index} index={index} todo={todo} />)}
            </div>
        </>
    )
}

export default Dashboard;
