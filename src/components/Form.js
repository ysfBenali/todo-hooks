import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    height:10em;
    width: 70%;    
    margin : 0 auto;
    top: 10vw;
    border:2px solid red;

    @media (max-width: 1180px) {
        width: 85%;    
        flex-direction: column;
        height:100%;

    }

`
const Input = styled.input`
    // display: inline-block;    
    width: 32%;
    box-sizing : border-box;
    height: 3.5em;
    margin: 0 auto;
    @media (max-width: 1180px) {
       width: 90%;
       margin : 2em 1em 1.5em 0;
    }
`

const Button = styled.button`
    display: block;   
    margin: auto;
    @media (max-width: 1180px) {
         display: block;  
         width : 30%;    
         margin : 2em 1em 1.5em 0;
     }
`


export const Form = () => {
    return (
        <Wrapper>
            <Input />
            <Input />
            <Input />
            <Button> Add Task </Button>
        </Wrapper>
    )
}