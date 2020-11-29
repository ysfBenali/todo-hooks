import React, { useState, useContext, useEffect } from 'react';
import { Actions } from '../reducers/useVisibilityFilter';
import AddCircleButton from '../custom-components/AddCircleButton';
import Tasks from './Tasks';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CustomButton from '../custom-components/CustomButton';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import NProgress from 'react-nprogress';
import Spinner from 'react-spinkit';
import { TodoContext, FilterContext } from '../App';
import styled, { css } from 'styled-components';
import 'react-nprogress/nprogress.css';

const theme = {
    bg: '#1f97fa'
}

const Dashboard = () => {

    const { todos } = useContext(TodoContext);
    const { changeFilter, filter } = useContext(FilterContext);

    const [showForm, setShowForm] = useState(false);
    
    const [searchTerm, setSearchTerm] = useState(filter.text);
    const [orderBy, setOrderBy] = useState(filter.orderBy);
    const [show, setShow] = useState(filter.show);

    NProgress.set(0.5);

    useEffect(() => {
        NProgress.done();
        return () => {
        }
    })

    const visibleTodos = (list, { orderBy, show }, searchTerm) => {

        let newList = [];

        if (searchTerm !== "") {
            newList = list.filter(
                todo => todo.task.toLowerCase().includes(searchTerm.toLowerCase())
            );
        } else {
            newList = list;
        }

        newList.sort((a, b) => {
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
                return newList;
            case 'Done':
                return newList.filter(todo => todo.completed);
            case 'Active':
                return newList.filter(todo => !todo.completed);
            default:
                return newList;
        };

    }
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleOrderByChange = (e) => {
        setOrderBy(e.target.value);
        changeFilter({ type: Actions.ORDER_BY, payload: { orderBy: e.target.value, text: searchTerm } })
    }

    const handleShow = (e) => {
        if (e.target.value !== show) {
            setShow(e.target.value);
            changeFilter({
                type: Actions.SET_VISIBILITY_FILTER,
                payload: { show: e.target.value, text: searchTerm }
            })
        }
    }
    return (
        <>
            <Navbar />
            <Link to='/create'>
                <AddCircleButton theme={{bg : '#e84118'}} onClick={() => { setShowForm(!showForm) }}>
                    <AddCircleIcon style={{ fontSize: '3.5rem' }} />
                </AddCircleButton>
            </Link>

            <SearchContainer>
                <Input type='text' id='text' width='70%' name='searchTerm' placeholder='Search for a task' value={searchTerm} onChange={handleSearchChange} />
                <Select width='30%' value={orderBy} onChange={handleOrderByChange}>
                    <option value='' disabled >Sort By</option>
                    <option value='date'>Date</option>
                    <option value='deadline'>Deadline</option>
                </Select>
            </SearchContainer>

            <FilterContainer>
                {['All', 'Active', 'Done'].map((item, index) => <CustomButton name={item} value={item} key={index} theme={theme}
                    checked={show === item} onClick={handleShow}>{item}</CustomButton>)}
            </FilterContainer>

            {
                (todos) ? <Tasks {...{ todos, filter, searchTerm, visibleTodos }} /> : <Spinner name="line-scale-pulse-out" color="#EA4C12" />
            }
        </>
    )
}

const SearchContainer = styled.div`
    position: absolute;
    left: 50%;

    transform: translateY(-13%) translateX(-50%);
    background-color: white;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    width: 30%;    
    margin-top : -2rem;
    box-sizing: content-box;
    padding: 2rem;
    @media (max-width: 1200px) {
        width: 70%;    
    }

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

    :focus {
        border : #0abde3 1px solid;
    }
`
const Input = styled.input`
    ${baseInputStyles}
    @media (max-width: 680px){
         width: 100%; 
    }
`
const Select = styled.select`
    ${baseInputStyles}
    @media (max-width: 680px){
         display: none; 
    }
`
const FilterContainer = styled.div`
    width : 60%;
    margin : 5rem auto 0;
    display : flex;
    justify-content: space-between;
    @media (max-width: 1200px) {
        width : 100%;
    }
    @media (max-width: 680px){
         display: none; 
    }
`

export default Dashboard;
