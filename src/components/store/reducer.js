import * as actionType from './action';

const initialState = {
    name:['Ramesh', 'Amutha', 'Laxana']
} 

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionType.ADD_NAME:
            return {
                ...state,
                name: {
                    ...state.name 
                }
            }
        case actionType.REMOVE_NAME:
            return 
        default:
            return state
    }
}

export default reducer;