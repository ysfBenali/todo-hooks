import React, { useState, useContext, useEffect } from 'react';
import { Actions } from '../reducers/useTodoList';
import DatePicker from 'react-datepicker';
import convertToTimestamp from '../firebase/convertToTimestamp';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Alert from './Alert';
import { TodoContext, FilterContext } from '../App';
import 'react-datepicker/dist/react-datepicker.css';
import styled, { css } from 'styled-components';

const EditTodo = () => {
    const { dispatch, todos } = useContext(TodoContext);
    const { changeFilter } = useContext(FilterContext);
    const [selectedTodo, setSelectedTodo] = useState({ task: '', type: 'Code', completed: false, date: new Date() });
    const [errorMsg, setErrorMsg] = useState('');
    const { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        const selectedTodo = todos?.find(todo => todo.id === id);
        setSelectedTodo({ ...selectedTodo, date: selectedTodo?.date.toDate() });
    }, [id, todos])

    const handleChange = (e) => {
        setSelectedTodo({ ...selectedTodo, [e.target.name]: e.target.value });
    }
    const handleDateChange = (date) => {
        setSelectedTodo({ ...selectedTodo, 'date': date });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let { task, type } = selectedTodo;
        let date = convertToTimestamp(selectedTodo.date);

        if (!task || !type || !date) {
            setErrorMsg("Fill in all the fields");
        } else {
            dispatch({ payload: { ...selectedTodo, date: date }, type: Actions.EDIT_TODO });
            changeFilter({
                type: Actions.SET_VISIBILITY_FILTER,
                payload: { text: '' }
            })
            history.push('/dashboard');
        }
    }

    const closeModal = () => {
        setErrorMsg('');
    }

    return (
        <>
        <Navbar/>
            <form onSubmit={handleSubmit}>
                <Wrapper>
                    <Input name='task'
                        placeholder='Task'
                        value={selectedTodo.task}
                        onChange={handleChange}
                    />
                    <Select name='type' value={selectedTodo.type} onChange={handleChange}>
                        <option value='code'>Code</option>
                        <option value='design'>Design</option>
                        <option value='gym'>Gym</option>
                        <option value='other'>Other</option>
                    </Select>
                    <DatePicker customInput={<Input />}
                        name='date'
                        selected={selectedTodo.date}
                        onChange={handleDateChange}
                    />
                    <Button> Edit Task </Button>
                </Wrapper>
            </form>
            <Alert alertMsg={errorMsg} closeModal={closeModal} />
        </>
    )
}

const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    
    transform: translateY(-13%) translateX(-50%);
    background-color: white;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    width: 70%;    
    margin : 0 auto;
    box-sizing: content-box;
    padding: 0.4em;
    @media (max-width: 1200px) {
        width: 85%;    
        flex-direction: column;
        justify-content: space-evenly;
        min-height: 400px;
    }
    padding-top: 2rem;

    border-radius:6px;
    -webkit-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
`
const baseInputStyles = css`
    display: inline-block;    
    width: 32% ;
    box-sizing : border-box;
    height: 2.8rem !important;
    border-radius: 0.2em;
    margin: 2em auto ; 
    border: #b5b1b1 1px solid;
    outline: none;
    padding: 0.75em 1.5em;
    @media (max-width: 1200px) {
       width: 90%!important;
       margin: 0 auto; 
    }
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
const Button = styled.button`
    font-size: 14px;
    margin: .5em auto;
    margin-bottom : 1.5rem;
    border-radius: 2em;
    padding: 0.75em 1.5em;
    cursor: pointer;
    background: none;
    color: darken(#4fc08d, 20%);
    border: 1px solid;
    letter-spacing: 1px;
    font-family: $font-family;
    color: #4fc08d;
    border: #4fc08d 2.5px solid;
    transition: 250ms ease-out;
    &:hover, &:focus {
    color: #fff;
    background: #4fc08d;
    outline: none;
    }
`

export default EditTodo;