import React, { useReducer } from 'react';

const FilterDefaultState = {
    text: '',
    orderBy: 'date',
    show: 'All'
}

export const Actions = {
    SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER",
    ORDER_BY: "ORDER_BY",
    // SEARCH: "SEARCH",
}

const reducer = (state, action) => {

    const { type, payload } = action;
    const { show, text, orderBy } = payload;

    switch (type) {
        case Actions.SET_VISIBILITY_FILTER:
            return {
                ...state,
                text: text,
                show: show,
            };
        case Actions.ORDER_BY:
            return {
                ...state,
                text: text,
                orderBy: orderBy,
            };
        //not used yet !!
        // case 'SEARCH':
        //     return {
        //         ...state,
        //         text: text,
        //     };
        default:
            return state;
    }

}

export const useVisibilityFilter = () => {
    const [filter, changeFilter] = useReducer(reducer, FilterDefaultState);
    return [filter, changeFilter];
}
