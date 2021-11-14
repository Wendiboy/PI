import * as axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CharacterItem from "./CharacterItem/CharacterItem.jsx";

const EpisodeInfoContainer =(props) => {   
    const [EpisodeName, setEpisodeName] = useState('');
    const [EpisodeDate, setEpisodeDate] = useState('');
    const [EpisodeNumber, setEpisodeNumber] = useState('');
    const [EpisodeCharacters, setEpisodeCharacters] = useState([]);

    let { epId } = useParams();

    useEffect(()=> {
        axios.get(`https://rickandmortyapi.com/api/episode/` + epId ).then(response => {
        setEpisodeName(response.data.name)
        setEpisodeDate(response.data.air_date)
        setEpisodeNumber(response.data.episode)
        setEpisodeCharacters(response.data.characters)
    }); 
    }, [])


    let characterElements = () => { 
        let Ch_ARR = EpisodeCharacters.map(u => <CharacterItem key={u} url={u}/>);
        return Ch_ARR
    }  

    return (
        <div className="EpisodeInfo">
            <h3 className="EpisodeInfo__name">{EpisodeName}</h3>
            <div className="EpisodeInfo__number">
                Номер эпизода: {EpisodeNumber}
            </div>
            <div className="EpisodeInfo__date">
                Дата выхода: {EpisodeDate}
            </div>
            <div className="EpisodeInfo__text">Characters</div>
            <div className="EpisodeInfo__characters">                
                {characterElements()}
            </div>
        </div>
             
    )
}

export default EpisodeInfoContainer;