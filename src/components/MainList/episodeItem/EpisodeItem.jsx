import React from "react";
import './EpisodeItem.css';

const EpisodeItem = (props) => {
    
    
    return (    
    <div className='EpisodeItem'>
        {/* <h3 className="EpisodeItem__text">{props.episode.name}</h3> */}
        <div className="EpisodeItem__pic"></div>
        {/* <div className="EpisodeItem__number">{props.episode.episode}</div> */}
        <p className="EpisodeItem__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam itaque, at fugit nesciunt necessitatibus iusto numquam quo ex eos nulla vero nam ab quas, tempore, perspiciatis provident quibusdam pariatur earum!
        </p>
        {/* <div className="EpisodeItem__date">{props.episode.air_date}</div> */}
    </div>
    
    )
}

export default EpisodeItem