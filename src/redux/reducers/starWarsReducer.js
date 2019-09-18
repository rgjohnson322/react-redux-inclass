import Axios from "axios";

//initialState
const initialState= {
    characters: [],
    loading: false
}

//constants
const GET_CHARS = "GET_CHARS";

//action creators
export function getStarWarsChars(chars) {
    return {
        type: GET_CHARS,
        payload: Axios.get('https://swapi.co/api/people')
    }
}

//reducer

export default function reducer(state=initialState, action) { //{type,payload}// 
        switch(action.type) {
            case `${GET_CHARS}_FULFILLED`:
                // fulfilled, pending, rejected

                return {
                    ...state, 
                    characters: action.payload.data.results,
                    loading: false
                }
                case `${GET_CHARS}_PENDING`:
                    return{
                        ...state,
                        loading: true
                    }
            default: return state;
        }
}
