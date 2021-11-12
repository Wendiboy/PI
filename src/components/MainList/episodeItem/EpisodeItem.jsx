import React from "react";
import './EpisodeItem.css';

const EpisodeItem = (props) => {
    
    
    return (    
    <div className='EpisodeItem'>
        <h3 className="EpisodeItem__text">{props.episode.name}</h3>
        <div className="EpisodeItem__number">{props.episode.episode}</div>
        
        <div className="EpisodeItem__date">{props.episode.air_date}</div>
    </div>
    
    )
}

export default EpisodeItem