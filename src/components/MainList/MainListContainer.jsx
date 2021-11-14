import * as axios from 'axios';
import React, { useReducer } from 'react';

import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setEpisodes, setCurrentPage, setTotalEpisodesCount, toggleIsFetching, toggleFolloingProgress } from '../../redux/mainlist-reducer';
import EpisodeItemContainer from './episodeItem/EpisodeItemContainer.jsx';

const MainListContainer = () => {
    console.log('render')  

    const dispatch = useDispatch()
    const episodes = useSelector(state => state.mainlistPage.episodes)
    const currentPage = useSelector(state => state.mainlistPage.currentPage)
    const totalCount = useSelector(state => state.mainlistPage.totalEpisodesCount)
    // const fetching = useSelector(state => state.mainlistPage.isFetching)
    const [fetching, setFetching] = useState(true)

    useEffect(()=>{
        if (fetching){
            console.log('fetching')
            console.log(`https://rickandmortyapi.com/api/episode?page=`+currentPage)
            axios.get(`https://rickandmortyapi.com/api/episode?page=`+currentPage).then(response =>{
                let newEpisodeArray = episodes
                response.data.results.map(ep => newEpisodeArray.push(ep))          
                dispatch(setEpisodes(newEpisodeArray))                      
                dispatch(setCurrentPage(currentPage + 1))              
                dispatch(setTotalEpisodesCount(response.data.info.count))  
            })
            .finally(() => setFetching(false));
    
        }
    }, [fetching])

    useEffect(()=> {
        document.addEventListener('scroll', scrollHandler)        
        return ()=>{
            console.log('DELEEEET')
            document.removeEventListener('scroll',scrollHandler)
        }
    }, [fetching])


    const scrollHandler = (e) => {   
        console.log('scroll')
        if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) && (episodes.length < totalCount)){
            console.log('op')
            setFetching(true)
        }
    }

    return(
        <div className="MainList">
            {episodes.map(episode => <EpisodeItemContainer episode={episode} key={episode.id}/>)}
        </div>
    )

}

export default MainListContainer 