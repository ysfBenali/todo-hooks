import React from 'react'
import "react-datepicker/dist/react-datepicker.css";
import styled, { css } from 'styled-components';
import DatePicker from "react-datepicker";

const Wrapper = styled.div`
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
// const Button = styled.button`
//     display: block;   
//     margin: 0 auto;
//     // font-size: 0.2em!important;
//     @media (max-width: 1298px) {
//          margin : 2em 1em 1.5em 0;
//      }
// `

const Button = styled.button`
    font-size: 14px;
    margin: 0 auto;
    border-radius: 2em;
    padding: 0.75em 1.5em;
    cursor: pointer;
    background: none;
    color: darken(#4fc08d, 20%);
    border: 1px solid;
    letter-spacing: 1px;
    font-family: $font-family;
    color: #4fc08d;
    border: #4fc08d 1px solid;
    transition: 250ms ease-out;
    &:hover, &:focus {
    color: #fff;
    background: #4fc08d;
    outline: none;
    }
`



export const Form = () => {
    return (
        <form>
            <Wrapper>
                <Input />
                <Select name="type">
                    <option value="code">Code</option>
                    <option value="design">Design</option>
                    <option value="gym">Gym</option>
                    <option value="other">Other</option>
                </Select>
                {/* <Input /> */}
                <DatePicker customInput={<Input />} />
                {/* <DatePicker
               customInput={<Input />}
                /> */}
                <Button> Add Task </Button>
            </Wrapper>
        </form>
    )
}