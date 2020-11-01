import React, { useState, useContext, useEffect, useRef } from 'react';
import AddCircleButton from '../custom-components/AddCircleButton';
import styled, { css } from 'styled-components';
import { Task } from './Task';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CustomButton from '../custom-components/CustomButton';
import { Link } from 'react-router-dom';
import { useForm } from '../custom-hooks/useForm';
import { TodoContext, FilterContext } from '../App';
import Tasks from './Tasks';

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
const Dashboard = ({ todos }) => {

    // const { dispatch, todos } = useContext(TodoContext);
    const { changeFilter, filter } = useContext(FilterContext);

    const [showForm, setshowForm] = useState(false);

    const [searchTerm, setSearchTerm] = useState(filter.text);
    const [orderBy, setOrderBy] = useState(filter.orderBy);
    const [filterDisplay, setfilterDisplay] = useState([]);

    const searchInput = useRef(null);
    const { text, show } = filter;

    let oldList = todos.map(todo => {
        return {
            id: todo.id, task: todo.task.toLowerCase(), type: todo.type, completed: todo.completed
        }
    });

    useEffect(() => {
        if (searchTerm !== "") {
            let newList = [];
            newList = oldList.filter(
                todo => todo.task.includes(searchTerm.toLowerCase())
            );
            setfilterDisplay(newList);
        } else {
            setfilterDisplay(todos);
        }
    }, [searchTerm]);


    // useEffect(() => {
    //     console.log(filter);

    // }, [orderBy]);

    // const visibleTodos = (list, filter) => {

    //     switch (filter.show) {
    //         case 'All':
    //             return list;
    //         case 'Done':
    //             return list.filter(todo => todo.completed);
    //         case 'Active':
    //             return list.filter(todo => !todo.completed);
    //         default:
    //             return list;
    //     }
    // }
    const handleSearchChange = (e) => {
        changeFilter({ type: "SEARCH", payload: { text: e.target.value } })
    }
    const handleOrderByChange = (e) => {
        changeFilter({ type: "ORDER_BY", payload: { orderBy: e.target.value } })
    }
    return (
        <>
            <Link to='/create'>
                <AddCircleButton color='primary' onClick={() => { setshowForm(!showForm) }}>
                    <AddCircleIcon style={{ fontSize: '3rem' }} />
                </AddCircleButton>
            </Link>
            <SearchContainer>
                <Input type='text' id='text' width='70%' name='searchTerm' placeholder='Search for a task' value={filter.text} onChange={handleSearchChange} />
                <Select width='30%' value={orderBy} onChange={handleOrderByChange}>
                    <option value='' disabled selected >Sort By</option>
                    <option value='date'>Date</option>
                    <option value='deadline'>Deadline</option>
                </Select>
            </SearchContainer>
            <FilterContainer>
                {['All', 'Active', 'Done'].map((item, index) => <CustomButton key={index} theme={theme} onClick={() => changeFilter({ type: "SET_VISIBILITY_FILTER", payload: { show: item, text: searchTerm } })}>{item}</CustomButton>)}
            </FilterContainer>

            {/* <div className='tasks'>
                {searchTerm.length < 1 ?
                    visibleTodos(todos, filter).map((todo, index) => <Task key={index} index={index} todo={todo} />)
                    : visibleTodos(filterDisplay, filter).map((todo, index) => <Task key={index} index={index} todo={todo} />)
                }
            </div> */}
            {searchTerm.length < 1 ?
                <Tasks tasks={todos} filters={filter} /> :
                <Tasks tasks={filterDisplay} filters={filter} />
            }
        </>
    )
}

export default Dashboard;
