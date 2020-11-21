import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export default styled(IconButton)
    `
    color: #EA4C12;
    background-color: #ffff;
    position: absolute;
    display: block!important;
    left: 80%;
    transform: translateY(-50%) translateX(-50%);

    &:hover {
        background-color: #ffff;
    }
    @media (max-width: 1200px) {
        z-index: 1;
        position: fixed;
        display: block;
        right: 2rem;
        left: 95%;
        bottom : 0%;
        padding: 1px;
      }
      @media (max-width: 680px){
        left: 85%;
      }
`;