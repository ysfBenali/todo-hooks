import React, { useState, useContext, useEffect } from 'react';
import { Actions } from '../reducers/useTodoList';
import convertToTimestamp from '../firebase/convertToTimestamp';
import DatePicker from 'react-datepicker';
import CustomButton from '../custom-components/CustomButton';
import { useHistory } from 'react-router-dom';
import { useForm } from '../custom-hooks/useForm';
import NProgress from 'react-nprogress';
import { TodoContext } from '../App';
import styled, { css } from 'styled-components';
import 'react-nprogress/nprogress.css'
import 'react-datepicker/dist/react-datepicker.css';

const theme = {
    bg: "#4fc08d"
}

const AddTodo = () => {
    const { dispatch } = useContext(TodoContext);
    const [values, handleChange] = useForm({ task: '', type: 'code', completed: false });
    const [date, setStartDate] = useState(new Date());
    let history = useHistory();

    useEffect(() => {
        // NProgress.set(0.1);
    }, [])
  
    const handleSubmit = (event) => {
        event.preventDefault();
        setStartDate(convertToTimestamp(date));
        let createdAt = convertToTimestamp(new Date());
        dispatch({ payload: { ...values, date, createdAt }, type: Actions.ADD_TODO });
        history.push('/dashboard');

        // reset();
    }
    const handleDateChange = (date) => {
        setStartDate(date);
    }
    return (
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
    )
}

export const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    // top:30%;
    // top : 9em;

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