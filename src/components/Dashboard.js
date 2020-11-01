import React, { useState, useContext, useEffect, useRef } from 'react';
import AddCircleButton from '../custom-components/AddCircleButton';
import styled, { css } from 'styled-components';
import Tasks from './Tasks';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CustomButton from '../custom-components/CustomButton';
import { Link } from 'react-router-dom';
import { useForm } from '../custom-hooks/useForm';
import { TodoContext, FilterContext } from '../App';
import firebase from 'firebase';
import db from '../firebase/firebase';

const theme = {
    // fg: "palevioletred",
    // bg: "#4fc08d",
    bg: '#EA4C12'
}
const Dashboard = () => {

    const { dispatch, todos } = useContext(TodoContext);
    const { changeFilter, filter } = useContext(FilterContext);

    const [showForm, setShowForm] = useState(false);

    const [searchTerm, setSearchTerm] = useState(filter.text);
    const [orderBy, setOrderBy] = useState(filter.orderBy);
    const [filterDisplay, setfilterDisplay] = useState([]);

    const searchInput = useRef(null);
    const { text, show } = filter;

    useEffect(() => {
        return () => {
            //changeFilter({ type: "SEARCH", payload: { text : searchTerm} })
            console.log("unload", searchTerm)
        };
    }, []);


    useEffect(() => {
        if (searchTerm !== "") {
            let newList = [];
            newList = todos.filter(
                todo => todo.task.toLowerCase().includes(searchTerm.toLowerCase())
            );
            // changeFilter({ type: "SEARCH", payload: {text: searchTerm } })
            setfilterDisplay(newList);
        } else {
            setfilterDisplay(todos);
        }

    }, [searchTerm]);


    useEffect(() => {
        console.log(filter);
    }, [orderBy]);

    const visibleTodos = (list, { orderBy, show }) => {
        list.sort((a, b) => {
            switch (orderBy) {
                case 'date':
                    return a.date > b.date ? 1 : -1;
                case 'deadline':
                    return a.createdAt > b.createdAt ? 1 : -1;
                default:
                    return a.date > b.date ? 1 : -1;
            }
        });

        switch (show) {
            case 'All':
                return list;
            case 'Done':
                return list.filter(todo => todo.completed);
            case 'Active':
                return list.filter(todo => !todo.completed);
            default:
                return list;
        };
    }
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleOrderByChange = (e) => {
        setOrderBy(e.target.value);
        changeFilter({ type: "ORDER_BY", payload: { orderBy: e.target.value, text: searchTerm } })

    }
    return (
        <>
            <Link to='/create'>
                <AddCircleButton color='primary' onClick={() => { setShowForm(!showForm) }}>
                    <AddCircleIcon style={{ fontSize: '3rem' }} />
                </AddCircleButton>
            </Link>
            <SearchContainer>
                <Input type='text' id='text' width='70%' name='searchTerm' placeholder='Search for a task' value={searchTerm} onChange={handleSearchChange} />
                <Select width='30%' value={orderBy} onChange={handleOrderByChange}>
                    <option value='' disabled selected >Sort By</option>
                    <option value='date'>Date</option>
                    <option value='deadline'>Deadline</option>
                </Select>
            </SearchContainer>
            <FilterContainer>
                {['All', 'Active', 'Done'].map((item, index) => <CustomButton name={item} value={item} key={index} theme={theme} checked={filter.show === item} onClick={() => { console.log("llll", filter); changeFilter({ type: "SET_VISIBILITY_FILTER", payload: { show: item, text: searchTerm } }); }}>{item}</CustomButton>)}
            </FilterContainer>

            <Tasks {...{ todos, filterDisplay, searchTerm, filter, visibleTodos }} />
        </>
    )
}

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

export default Dashboard;
