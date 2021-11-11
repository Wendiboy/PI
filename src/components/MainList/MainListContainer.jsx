import * as axios from 'axios';
import React from 'react';
import {connect} from 'react-redux'
import MainList from './MainList.jsx';

import { setEpisodes, setCurrentPage, setTotalEpisodesCount, toggleIsFetching, toggleFolloingProgress } from '../../redux/mainlist-reducer';

// import Preloader from '../Preloader/Preloader';
// import { usersAPI } from '../../API/API';
// debugger
const MainListContainer = (props) => {
    if (props.episodes.length === 0){     
        axios.get("https://rickandmortyapi.com/api/episode").then(response => {
            props.setEpisodes(response.data.results);
            console.log(response.data.results)
        })
    }

    return <>
            <MainList totalEpisodesCount={props.totalEpisodesCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                // onPageChange={onPageChange}
                episodesPage = {props.episodes}
            />
        </>
}

let mapStateToProps = (state) => {
    return {       
        episodes: state.mainlistPage.episodes,
        pageSize: state.mainlistPage.pageSize,
        totalEpisodesCount: state.mainlistPage.totalEpisodesCount,
        currentPage: state.mainlistPage.currentPage,
        isFetching: state.mainlistPage.isFetching
    }
}

export default connect(mapStateToProps, {
    setEpisodes,
    setCurrentPage,
    setTotalEpisodesCount,
    toggleIsFetching,
    toggleFolloingProgress
})(MainListContainer);
