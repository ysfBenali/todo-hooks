import styled from 'styled-components';

const Button = styled.button`
    font-size: 14px;
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
    color: #fff;
    background: ${props => props.theme.bg};
    outline: none;
    }
`
export default Button;
