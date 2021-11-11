import {combineReducers, createStore} from "redux";
import mainListReducer from "./mainlist-reducer.js";


let reducers = combineReducers({
    mainlistPage: mainListReducer,
    
});

let store = createStore(reducers);

export default store;

Window.store = store;