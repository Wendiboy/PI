import React, { Component } from "react";
import '../styles/App.css';
import Header from "./Header/Header.jsx";
import MainList from "./MainList/MainList.jsx";
import MainListContainer from "./MainList/MainListContainer.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx"
import store from "./../redux/redux-store.js"
import EpisodeInfo from "./EpisodeInfo/EpisodeInfo.jsx";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import CharacterItem from "./EpisodeInfo/CharacterItem/CharacterItem.jsx";
import EpisodeInfoContainer from "./EpisodeInfo/EpisodeInfoContainer.jsx";


class App extends Component {
    render() {
        return (
                <div className="App__wrapper">
                    <Header />
                    <Sidebar />

                    {/* <div> */}
                        <Routes>
                                                    
                            <Route path="/Episode" element={<EpisodeInfoContainer />}/>
                            {/* <Route path="/Episode" element={<EpisodeInfo />}/> */}
                            {/* <Route path="/Main" element={<MainListContainer props={store}/>}/> */}
                            <Route path="*" element={<MainListContainer props={store}/>}/>
                            <Route path="/Episode/:epId" element={<EpisodeInfoContainer />}/>

                            
                        </Routes>
                    {/* </div> */}
                </div>
        );
    }
}

export default App;