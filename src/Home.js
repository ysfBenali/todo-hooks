import React from 'react'
import styled from 'styled-components';
import AddCircleButton from './custom-components/AddCircleButton'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './styles.css';

export const Home = () => {
    return (
        <div>
            <div className="curved">
                <h1>Todo for today</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffff" fill-opacity="1"
                        d="M0,192L60,192C120,192,240,192,360,192C480,192,600,192,720,208C840,224,960,256,1080,229.3C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                    </path>
                    
                </svg>
               
            </div>
            <div className="curved lower">
            <AddCircleButton>
                    <AddCircleIcon style={{ fontSize: '10em' }} />
                </AddCircleButton>
            </div>
        </div>
    )
}
