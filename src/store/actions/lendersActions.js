import * as actionTypes from './actionTypes';

export const searchLenders = (searchBy, searchValue) => {
    return {
        type: actionTypes.SEARCH_LENDERS,
        searchBy,
        searchValue
    }

}

export const filterLenders = (settings) => {
    return {
        type: actionTypes.FILTER_LENDERS,
        settings
    }

}
