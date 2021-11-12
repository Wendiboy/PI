import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <ul>
                <li><NavLink to="/">Main</NavLink></li>
                <li>season 1</li>
                <li>season 2</li>
                <li>season 3</li>
                <li>season 4</li>
            </ul>
            
        </div>
    )
}

export default Sidebar