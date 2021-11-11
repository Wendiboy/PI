import React, { Component } from "react";
import '../styles/App.css';
import Header from "./Header/Header.jsx";
import MainList from "./MainList/MainList.jsx";
import MainListContainer from "./MainList/MainListContainer.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx"
import store from "./../redux/redux-store.js"


class App extends Component {
    render() {
        return (
            <div className="App__wrapper">
                <Header />
                <Sidebar />
                <MainListContainer props={store}/>
            </div>
        );
    }
}

export default App;