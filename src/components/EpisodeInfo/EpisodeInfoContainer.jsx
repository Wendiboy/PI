import * as axios from 'axios';
import React from 'react';
import { setEpisode } from '../../redux/epiosde-reducer.js';
import EpisodeInfo from './EpisodeInfo.jsx';
import {connect} from 'react-redux'


class EpisodeInfoContainer extends React.Component{   
    componentDidMount() {
        axios.get(`https://rickandmortyapi.com/api/episode/3`).then(response => {
         this.props.setEpisode(response.data);
     }); 

    }
    render(){   
        return <EpisodeInfo {...this.props} episode={this.props.episode}/>
    }
}

let mapStateToProps = (state) => {
    return {
        EpisodePage: state.episodePage,
        episode: state.episodePage.episode
    }
}


export default connect(mapStateToProps, {setEpisode})(EpisodeInfoContainer); 