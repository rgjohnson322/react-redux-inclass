//initialState
const initialState= {
    favChar: ""
}

//constants
const UPDATE_CHAR = "UPDATE_CHAR";

//action creators
export function updateFavChar(chars) {
    return {
        type: UPDATE_CHAR,
        payload: chars
    }
}

//reducer

export default function reducer(state=initialState, action) { //{type,payload}// 
        switch(action.type) {
            case UPDATE_CHAR:
                return {
                    ...state, favChar: action.payload
                }
            default: return state;
        }
}
