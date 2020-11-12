import React, { useReducer } from 'react';

const FilterDefaultState = {
    text: '',
    orderBy: 'date',
    show: 'All'
}

const reducer = (state, action) => {
    
    const { type, payload } = action;
    const { show, text, orderBy } = payload;

    switch (type) {
        case 'SET_VISIBILITY_FILTER':
            return {
                ...state,
                text: text,
                show: show,
            };
        case 'ORDER_BY':
            console.log("order By ..", text);
            return {
                ...state,
                text: text,
                orderBy: orderBy,
            };
        case 'SEARCH':
            return {
                ...state,
                text: text,
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