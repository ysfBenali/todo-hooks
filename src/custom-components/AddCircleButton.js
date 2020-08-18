import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';

export default styled(IconButton)
`
    color: #EA4C12;
    background-color: #ffff;
    position: absolute;
    display: block!important;
    left: 80%;
    transform: translateY(-50%) translateX(-50%);

    // bottom: 0;
    // right: 15vw;
    &:hover {
        background-color: #ffff;
       // transform: scale(1.1);
    }
`;