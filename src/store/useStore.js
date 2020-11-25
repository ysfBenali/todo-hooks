import { useTodoList } from '../reducers/useTodoList';
import { useVisibilityFilter } from '../reducers/useVisibilityFilter';

// Equivalent to combineReducers in Redux !
const useStore = () => {

    const [todos, changeTodos] = useTodoList();
    const [filter, changeFilter] = useVisibilityFilter();

    const state = { todos, filter };

    const reducers = { changeFilter, changeTodos };

    return [state, reducers];
}

export default useStore;
