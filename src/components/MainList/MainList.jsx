import React from "react";
import './MainList.css';
import EpisodeItem from "./episodeItem/EpisodeItem.jsx";

const MainList = (props) => {

    let EpisodesElements = () => {
        debugger
        let Ep_ARR = props.episodesPage.map(u => <EpisodeItem key={u.id} episode={u} />);
        return Ep_ARR
    }  

    return (
    <div className='MainList'>
        {EpisodesElements()}
        
    </div>
    )
}

export default MainList