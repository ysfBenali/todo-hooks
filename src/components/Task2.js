import React, { Component } from 'react'
import styled, { css } from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

const Wrapper = styled.div`
    position: absolute;
    top: 50%;  
    left: 50%; 
    transform: translate(-50%, -50%); 
    // align-items: center;
    // text-align: center;

    display: flex;
    
    // grid-gap: 10px;

    grid-template-columns: 1fr 8fr 1fr;
    // text-align: start;
    
    height:12rem;
    width: 50%;
    // min-width: 50%; 
    // max-width: 50%;
    margin-top: 5em;

    box-sizing: content-box;
    border-radius:6px;
    -webkit-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
    
    @media (max-width: 1200px) {
        width: 70%;
        min-width: 70%;
     }

     @media (max-width: 680px) {
        width: 85%;
        min-width: 85%;
        height: 25%;
        transform: translate(-50%, -50%); 
     }
`
const Check = styled.div`
    // background-color: red;
    align-self: center;
//      max-width: 100%;
//   overflow: hidden;
`


const Title = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    background-color: red;
    justify-items: center;

`
const Top = styled.div`
    font-size: 1rem;
    font-weight: bold;
    background-color: blue;

    place-self: center;
    justify-self:start;
`
const Bottom = styled.div`
    background-color: green;
    place-self: center;
    justify-self: start;

`
const Right = styled.div`
    place-self: start;
`
export const Task = () => {
    return (
        <Wrapper>
            <Check>
                {/* <input type="radio"></input> */}
                <Checkbox
                    icon={<CircleUnchecked style={{ fontSize: 35, color: 'green' }} />}
                    checkedIcon={<CircleChecked style={{ fontSize: 35, color: 'green' }} />}

                />
            </Check>
            <Title>
                <Top>Start to look online aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Top>
                <Bottom>jjjfgdgdfgfdgdggg</Bottom>
            </Title>
            <Right>
                <IconButton >
                    <ClearIcon style={{ fontSize: 35, color: 'red' }} />
                </IconButton>
            </Right>

            {/* <div className="title"></div>

           <div className="type"></div> */}

        </Wrapper>
    )
}

