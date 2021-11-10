import React, { Component } from "react";
import '../styles/App.css';
import Header from "./Header/Header.jsx";
import MainList from "./MainList/MainList.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx"

class App extends Component {
    render() {
        return (
            <div className="App__wrapper">
                <Header />
                <Sidebar />
                <MainList />
            </div>
        );
    }
}

export default App;