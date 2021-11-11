import React from "react";
import CharacterItem from "./CharacterItem/CharacterItem.jsx";
import "./EpisodeInfo.css"

const EpisodeInfo = (props) => {
// debugger
    return(
        <div className="EpisodeInfo">
            
            <h3 className="EpisodeInfo__name">{props.EpisodePage.name}</h3>
            <div className="EpisodeInfo__number">
                Номер эпизода: {props.EpisodePage.number}
            </div>
            <div className="EpisodeInfo__date">
                Дата выхода:{props.EpisodePage.date}
            </div>
            <div className="EpisodeInfo__characters">
                <CharacterItem />
                <CharacterItem />
                <CharacterItem />
                <CharacterItem />
            </div>
        </div>
    )
}
export default EpisodeInfo