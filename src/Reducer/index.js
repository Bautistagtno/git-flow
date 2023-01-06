const initialState = {
    zapas: [],
    allZapas: [],
}

function rootReducer (state=initialState, action){
    switch(action.type){
        case 'GET_ZAPAS':
            return{
                ...state,
                zapas: action.payload,
                allZapas: action.payload
            }
        default:
            return state
        }
    }

export default rootReducer;