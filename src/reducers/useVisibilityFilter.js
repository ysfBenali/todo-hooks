import React, {useReducer} from 'react'

const reducer = (state, action) => {

    const { type, payload } = action;
    console.log(payload);

    switch (type) {
        case 'SET_VISIBILITY_FILTER':
            return action.payload;
        default:
            return state;
    }

}
const useVisibilityFilter = () => {
    const [filter, changeFilter] = useReducer(reducer,'ALL');
    return [filter, changeFilter];
}

export default useVisibilityFilter;