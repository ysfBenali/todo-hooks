import React, { useState, useContext } from 'react';
import { Actions } from '../reducers/useTodoList';
import convertToTimestamp from '../firebase/convertToTimestamp';
import DatePicker from 'react-datepicker';
import CustomButton from '../custom-components/CustomButton';
import Navbar from './Navbar';
import { useHistory } from 'react-router-dom';
import { useForm } from '../custom-hooks/useForm';
import Alert from './Alert';
import { TodoContext, FilterContext } from '../App';
import styled, { css } from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

const theme = {
    bg: "#1abc9c"
}

const AddTodo = () => {
    const { dispatch } = useContext(TodoContext);
    const { changeFilter } = useContext(FilterContext);
    const [values, handleChange] = useForm({ task: '', type: 'code', completed: false });
    const [date, setStartDate] = useState(new Date());
    const [errorMsg, setErrorMsg] = useState('');
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        let { task, type } = values;

        if (!task || !type || !date) {
            setErrorMsg("Fill in all the fields");
        }
        else {
            setStartDate(convertToTimestamp(date));
            let createdAt = convertToTimestamp(new Date());
            dispatch({ payload: { ...values, date, createdAt }, type: Actions.ADD_TODO });
            changeFilter({
                type: Actions.SET_VISIBILITY_FILTER,
                payload: { text: '' }
            })
            history.push('/dashboard');
        }
    }
    const handleDateChange = (date) => {
        setStartDate(date);
    }

    const closeModal = () => {
        setErrorMsg('');
    }

    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <Wrapper>
                    <Input name='task'
                        placeholder='Task'
                        value={values.task}
                        onChange={handleChange} />
                    <Select name='type' value={values.type} onChange={handleChange} >
                        <option value='code'>Code</option>
                        <option value='design'>Design</option>
                        <option value='gym'>Gym</option>
                        <option value='other'>Other</option>
                    </Select>
                    <DatePicker customInput={<Input />}
                        name='date'
                        selected={date}
                        onChange={handleDateChange}
                    />
                    <CustomButton theme={theme}> Add Task </CustomButton>
                </Wrapper>
            </form>
            <Alert alertMsg={errorMsg} closeModal={closeModal} />

        </>
    )
}

export const Wrapper = styled.div`
    position: absolute;
    left: 50%;

    transform: translateY(-13%) translateX(-50%);
    background-color: white;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    width: 70%;    
    margin : 0 auto;
    margin-top : -2rem;
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

export default AddTodo;