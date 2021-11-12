import * as axios from 'axios';
import React from 'react';
import { setEpisode } from '../../redux/epiosde-reducer.js';
import EpisodeInfo from './EpisodeInfo.jsx';
import {connect} from 'react-redux'


class EpisodeInfoContainer extends React.Component{   
    componentDidMount() {

        let epId = this.props.match.params.epId;
        if (!epId){
            epId = 2;
        }


        axios.get(`https://rickandmortyapi.com/api/episode/` + epId ).then(response => {
         this.props.setEpisode(response.data);
         
     }); 

    }
    render(){   
        return console.log('sdfs'); <EpisodeInfo {...this.props} episode={this.props.episode}/>
    }
}

let mapStateToProps = (state) => {
    return {
        
        EpisodePage: state.episodePage,
        episode: state.episodePage.episode
    }
}


export default connect(mapStateToProps, {setEpisode})(EpisodeInfoContainer); 