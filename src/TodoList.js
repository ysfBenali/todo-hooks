import React, { useState } from 'react'
import TodoForm from './TodoForm';
import {
  List, ListItem, ListItemText, Checkbox,
  ListItemSecondaryAction, IconButton, ListItemIcon
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Container from './components/Container';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '75%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export const TodoList = ({ todos, deleteTodo }) => {
  const classes = useStyles();

  return (
    <Container>
      <List className={classes.root}>
        {todos.map((todo, index) => (
            <ListItem key={index.toString()} dense button>
            <ListItemIcon>
              <Checkbox tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText primary={todo} />
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Delete"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                <DeleteIcon />
              </IconButton> 
            </ListItemSecondaryAction>
          </ListItem>
        ))}


    <Divider variant="inset" component="li" />
      </List>
    </Container>
  )
}
