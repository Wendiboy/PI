import React from "react"
import { NavLink } from "react-router-dom";
import EpisodeItem from "./EpisodeItem.jsx";

const EpisodeItemContainer = (props) => {
    return(
        // <NavLink to={`/Episode/${props.episode.id}`}><EpisodeItem episode={props.episode}/></NavLink>
        <a href={`/Episode/${props.episode.id}`}><EpisodeItem episode={props.episode}/></a>
    )
}
   

export default EpisodeItemContainer