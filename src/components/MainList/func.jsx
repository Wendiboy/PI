import * as axios from 'axios';
import React, { useReducer } from 'react';

import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setEpisodes, setCurrentPage, setTotalEpisodesCount, toggleIsFetching, toggleFolloingProgress } from '../../redux/mainlist-reducer';
import EpisodeItemContainer from './episodeItem/EpisodeItemContainer.jsx';

const MainListContainer = () => {
    console.log('render')
    

    useEffect(()=>{
        if (fetching){
            console.log('fetching')
            axios.get(`https://rickandmortyapi.com/api/episode?page=`+{currentPage}).then(response =>{
                dispatch(setEpisodes(response.data.results))              
                dispatch(setCurrentPage(state.repos.currentPage + 1))              
                dispatch(setTotalEpisodesCount(response.data.info.count))              
                // setCurrentPage(prevState => prevState + 1)
                // setTotalCount(response.data.info.count)
            })
            .finally(()=> setFetching(false));
    
        }
    }, [fetching])

    useEffect(()=> {
        document.addEventListener('scroll', scrollHandler)
        return function (){
            document.removeEventListener('scroll',scrollHandler)
        }
    }, [])


    useEffect(()=> {
        console.log('renderCoun')
        console.log(episodes.length)
       
        
    }, [episodes])

    const scrollHandler = (e) => {        
        if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) && (episodes.length < totalCount)){
            console.log('op')
            setFetching(true)
        }
    }

    const dispatch = useDispatch()
    const episodes = useSelector(state => state.repos.episodes)
    const currentPage = useSelector(state => state.repos.currentPage)
    const totalCount = useSelector(state => state.repos.totalEpisodesCount)
    // const [state, dispatch] = useReducer(reducer,)
    // const [state, dispatch] = useReducer(reducer,)

    return(
        <div className="MainList">
        {episodes.map(episode => 
            <EpisodeItemContainer episode={episode} key={episode.id}/>
        ) 
        }
        
        </div>
    )

}

export default MainListContainer 