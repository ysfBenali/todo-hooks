import styled, { css } from 'styled-components';

const CustomButton = styled.button`
    font-size: 1rem;
    margin: .5em auto;
    margin-bottom : 1.5rem;
    border-radius: 2em;
    padding: 1em 3em;
    cursor: pointer;
    background: none;
    color: darken(${props => props.theme.bg}, 20%);
    border: 1px solid;
    letter-spacing: 1px;
    font-family: $font-family;
    color: ${props => props.theme.bg};
    border: ${props => props.theme.bg} 2.9px solid;
    transition: 250ms ease-out;
    &:hover, &:focus {
        color: #ffff;
        background: ${props => props.theme.bg};
        outline: none;
    }
    ${parent => parent.checked && css`color: #fff; outline: none;background:${props => props.theme.bg}`}
`
export default CustomButton;
