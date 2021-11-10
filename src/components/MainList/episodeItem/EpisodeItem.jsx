import React from "react";
import './EpisodeItem.css';

const EpisodeItem = () => {
    return (
    <div className='EpisodeItem'>
        <h3 className="EpisodeItem__text">Lorem</h3>
        <div className="EpisodeItem__pic"></div>
        <div className="EpisodeItem__number">001</div>
        <p className="EpisodeItem__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam itaque, at fugit nesciunt necessitatibus iusto numquam quo ex eos nulla vero nam ab quas, tempore, perspiciatis provident quibusdam pariatur earum!
        </p>
        <div className="EpisodeItem__date">10.11.2021</div>

    </div>
    )
}

export default EpisodeItem