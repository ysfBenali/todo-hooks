import React, { Component } from 'react'
import styled, { css } from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

const SingleTask = styled.div`
    position: relative; 
    display: flex;
    
    flex-direction: row;
    overflow: hidden;
    flex-flow: row ;
    align-items: space-around;
    
    margin:10px auto;
    // top: 70%;  
    // left: 50%; 
    // transform: translate(-50%, -50%); 
    
    height: 10rem;
    width: 60%;

    
    box-sizing: content-box;
    border-radius:6px;
    -webkit-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
    
    @media (max-width: 1200px) {
        width: 60%;

     }

     @media (max-width: 680px) {
        width: 85%;
        height: 9rem;

     }
     
     &:hover {
        transform: scale(1.1);
    }
    
`
const Start = styled.div`
    display: flex;
    flex: 1;
    // background-color: red;
    align-items: center;
    justify-content: center;
    

`


const Middle = styled.div`
    display : flex;
    flex: 5;
    flex-direction: column;
    justify-content: center;

    align-items: flex-start;
    // background-color: green;
    margin-bottom: 1rem;

    word-break:break-all;
    
    `
const Top = styled.span`
    display flex;
    flex:1;
    // background-color: blue;
    align-items: center;
`
const Bottom = styled.span`
    display flex;
    flex:1;
    // background-color: gray;
    align-items: center;
// margin-bottom: 1em;
`
const End = styled.div`
    background-color: pink;
`
export const Task = () => {
    return (
        <SingleTask>
            <Start>
                {/* <input type="radio"></input> */}
                <Checkbox
                    icon={<CircleUnchecked style={{ fontSize: 35, color: 'green' }} />}
                    checkedIcon={<CircleChecked style={{ fontSize: 35, color: 'green' }} />}

                />
            </Start>
            <Middle>
                {/* <div> */}
                <Top>
                    <h5>Start to look online</h5>
                </Top>
                <Bottom>
                    <h6>jjjfgdgdfgfdgdgggdfdfd</h6>
                </Bottom>
                {/* </div> */}

            </Middle>
            <End>
                <IconButton >
                    <ClearIcon style={{ fontSize: 35, color: 'red' }} />
                </IconButton>

            </End>

            {/* <div className="title"></div>

           <div className="type"></div> */}

        </SingleTask>
    )
}

