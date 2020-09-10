import { CHANGE_NAME } from './action';

const initialState = {
    newName: '預設藏鏡人'
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                newName: action.payload.newName
            }
        default:
            return state;
    }
}

export default reducer;