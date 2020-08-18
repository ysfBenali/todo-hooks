import styled from 'styled-components';

export default styled.input `
    width : 30vw;
    box-sizing: border-box;  
    border: none;

    /* background: mediumslateblue; */
    background: #ba24ff;
    font-size: 1.2em;

    color: white;
    :focus  {
        outline: none;
    }
    ::placeholder {
        color: white;
      }
`;