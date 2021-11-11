import {combineReducers, createStore} from "redux";
import episodeReduser from "./epiosde-reducer.js";
import mainListReducer from "./mainlist-reducer.js";


let reducers = combineReducers({
    mainlistPage: mainListReducer,
    episodePage: episodeReduser,    
});

let store = createStore(reducers);
export default store;
Window.store = store;