import React, { useEffect, useState } from "react";
import './CharacterItem.css';
import * as axios from 'axios';


const CharacterItem = (props) => {
    const [CharacterName, setCharacterName] = useState('');
    const [CharacterImg, setCharacterImg] = useState('');

    console.log(props.url);

    useEffect(()=> {
        axios.get(props.url).then(response => {
        setCharacterName(response.data.name)
        setCharacterImg(response.data.image)
    }); 
    }, [])

    return (
    <div className='CharacterItem'>
        <div className="CharacterItem__pic">
            <img className="CharacterItem__pic__img" src={CharacterImg}></img>
        </div>
        <h3 className="CharacterItem__name">
            {CharacterName}
        </h3>
        
        
    </div>
    )
}

export default CharacterItem