import { CHANGE_FAVORITE } from './action';

const initialState = {
    favoriteList: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_FAVORITE:
            return {
                ...state,
                favoriteList: action.payload.favoriteList
            }
        default:
            return state;
    }
}

export default reducer;