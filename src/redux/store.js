import {createStore, applyMiddleware, combineReducers} from "redux";
import showReducer from "./reducers/showReducer"
import promise from "redux-promise-middleware";
import starWarsReducer from "./reducers/starWarsReducer"

const rootReducer = combineReducers({
    showReducer,
    starWarsReducer
})


export default createStore(rootReducer, applyMiddleware(promise));
