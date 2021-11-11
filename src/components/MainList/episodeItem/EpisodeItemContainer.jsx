import React from "react"
import { NavLink } from "react-router-dom";
import EpisodeItem from "./EpisodeItem.jsx";

const EpisodeItemContainer = (props) => {
    return(
        <NavLink to={`/Episode/${props.episode.id}`}><EpisodeItem key={props.key} episode={props.episode}/></NavLink>
    )
}
   

export default EpisodeItemContainer