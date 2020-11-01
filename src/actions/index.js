import db from '../firebase/firebase';

const FETCH_TODOS = 'FETCH_TODOS';
const ADD_TODO = 'ADD_TODO';

export const addToDo = newToDo => async dispatch => {
    todosRef.push().set(newToDo);
  };
  
export const completeToDo = completeToDo => async dispatch => {
    todosRef.child(completeToDo).remove();
  };
  
  export const fetchToDos = () => async dispatch => {
    todosRef.on("value", snapshot => {
      dispatch({
        type: FETCH_TODOS,
        payload: snapshot.val()
      }); 
    });
  };