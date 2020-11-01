import React, { useReducer } from 'react'


const FilterDefaultState = {
    text: '',
    sortBy: 'date',
    show: 'All'
}

const reducer = (state, action) => {

    const { type, payload } = action;
    const { show, text, orderBy } = payload;
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return {
                ...state,
                show: show,
                text: text
            };
        case 'ORDER_BY':
            return {
                ...state,
                orderBy: orderBy,
                text: text
            };

        default:
            return state;
    }

}
const useVisibilityFilter = () => {
    const [filter, changeFilter] = useReducer(reducer, FilterDefaultState);
    return [filter, changeFilter];
}

export default useVisibilityFilter;