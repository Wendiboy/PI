import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <ul>
                <li><NavLink to="/Main">Main</NavLink></li>
                <li><NavLink to="/Episode">Episo</NavLink></li>
                <li>season 2</li>
                <li>season 3</li>
                <li>season 4</li>
            </ul>
            
        </div>
    )
}

export default Sidebar