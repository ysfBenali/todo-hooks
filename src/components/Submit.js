import styled from 'styled-components';

export default styled.input.attrs({ 
    type: 'submit',
    value: 'SAVE'
  })`
background: #00aec9;
  color: #fff;
  cursor: pointer;
  /* margin-bottom: 0; */
  text-transform: uppercase;
  width: 100px;
  border-radius: 5px;
  height: 45px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: blue;
  }
`;