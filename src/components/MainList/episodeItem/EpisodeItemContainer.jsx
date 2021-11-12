import React from "react"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import EpisodeItem from "./EpisodeItem.jsx";

const EpisodeItemContainer = (props) => {
    return(
        <Link className="EpisodeItemWrapper" to={`/Episode/${props.episode.id}`}><EpisodeItem  episode={props.episode}/></Link>
        // <a href={`/Episode/${props.episode.id}`}><EpisodeItem episode={props.episode}/></a>
    )
}
   

export default EpisodeItemContainer