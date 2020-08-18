import React from 'react'
import styled from 'styled-components';
import AddCircleButton from './custom-components/AddCircleButton'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Form } from './components/Form';
import './styles.css';

export const Home = () => {
    return (
        <div>
            <div className="curved">
                <h1>Todo for today</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 317" >
                    <path fill="#ffff" fill-opacity="1" d="M0,64L1440,224L1440,320L0,320Z" >
                    </path>
                </svg>

            </div>
            <div className="curved lower">
                <AddCircleButton>
                    <AddCircleIcon style={{ fontSize: '4rem' }} />
                </AddCircleButton>
                <Form />

            </div>
        </div>
    )
}