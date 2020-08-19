import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    height:10em;
    width: 70%;    
    margin : 0 auto;
    border:2px solid red;
    box-sizing: content-box;
    padding: 5px;
    @media (max-width: 1250px) {
        width: 85%;    
        flex-direction: column;
        height:100%;
    }
    padding-top: 3rem;

`
const Input = styled.input`
 display: inline-block;    
    width: 30%;
    box-sizing : border-box;
    height: 2.5rem;
    margin : .9rem ;
        /* margin: 0 auto; */

    @media (max-width: 1250px) {
       width: 90%;
       margin : .9rem ;
    }
`

const Button = styled.button`
    display: block;   
    margin: 0 auto;
    @media (max-width: 1250px) {
         /* width : 30%;     */
         margin : 2em 1em 1.5em 0;
     }
`


export const Form = () => {
    return (
        <form>
            <Wrapper>
            <Input />
            <Input />
            <Input />
            <Button> Add Task </Button>
            </Wrapper>
        </form>
    )
}