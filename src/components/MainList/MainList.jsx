import React from "react";
import './MainList.css';
import EpisodeItem from "./episodeItem/EpisodeItem.jsx";
import EpisodeItemContainer from "./episodeItem/EpisodeItemContainer.jsx";

const MainList = (props) => {

    let EpisodesElements = () => {
        let Ep_ARR = props.episodesPage.map(u => <EpisodeItemContainer key={u.id} episode={u} />);
        return Ep_ARR
    }  

    return (
    <div className='MainList'>
        {/* {EpisodesElements()}*/}
        
    </div>
    )
}

export default MainList