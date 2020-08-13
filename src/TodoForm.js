import React from 'react';
import useInputState from './useInputState';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import Wrapper from './components/Wrapper';
import TextField from './components/TextField';
import Container from './components/Container';
import HeaderText from './components/HeaderText';
import Button from '@material-ui/core/Button';
import Inline from './components/Inline';
import Submit from './components/Submit';

const theme = {
    font: 'Calibri',
    color: '#00aec9'
}

export default function TodoForm({ saveTodo, todosCount }) {
    const { value, onChange, reset } = useInputState();
    return (
        <Container>
            <form onSubmit={(event) => {
                event.preventDefault();
                saveTodo(value)
                reset();
            }}>
                <HeaderText theme={theme}>Todo List</HeaderText>
                <Inline>
                    <Wrapper>
                        <TextField type="text" placeholder="Todo . . ." name="todo" onChange={onChange} value={value} />
                        {/* <DeleteIcon /> */}
                        <Avatar variant="rounded" alt="Remy Sharp" src="/broken-image.jpg"
                            style={{ height: '1.4em', width: '1.4em', backgroundColor: '#f50057' }}>
                            {todosCount}

                            {/* #ff2183 */}
                        </Avatar>
                    </Wrapper>

                    {/* <Button variant="outlined" size="large" color="secondary" type="submit">
                        Submit  
                    </Button> */}
                    {/* <input type="submit" value="Send Request"></input> */}
                    <Submit/>
                </Inline>

            </form>
        </Container>
    )
}
