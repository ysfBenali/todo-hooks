import styled from 'styled-components';

const colorType= {
    code : 'purple',
    design : 'green',
    gym : 'orange',
    other : 'black'
 };


export default styled.span`
    background-color : ${props => colorType[props.type]};
    /* margin: 0 auto; */
    /* font-size: .9em; */
    /* align-items:center; */
    /* padding: 10px; */
    width: 4em;
    justify-content:center;
    font-size: medium;
    border-radius: 25px;
    color : #ffff;
    align-items: center;
    justify-content: center;
`