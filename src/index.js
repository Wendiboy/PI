import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

import { BrowserRouter,  Route } from 'react-router-dom';
import store from './redux/redux-store'
import {Provider} from 'react-redux';

let rerenderEntireTree = (state) => {
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </ Provider>    
        {/* </ Provider>, document.getElementById("root"));     */}
    </BrowserRouter>, document.getElementById("root"));
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
  rerenderEntireTree();
});
