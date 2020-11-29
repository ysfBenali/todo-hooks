import styled from 'styled-components';

const colorType= {
    code : '#706fd3',
    design : '#1abc9c',
    gym : '#fbc531',
    other : '#e74c3c'
 };


export default styled.span`
    background-color : ${props => colorType[props.type]};
    width: 4em;
    justify-content:center;
    font-size: medium;
    border-radius: 25px;
    color : #ffff;
    align-items: center;
    justify-content: center;
`