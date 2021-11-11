let SET_EPISODE = 'SET_EPISODE';

const initialState = {
        name: '',
        date: '',
        number: '',
        episode: null
};

const episodeReduser = (state = initialState, action) => {
    switch (action.type){
        case SET_EPISODE:{
            console.log(action.episode);
            console.log(action.episode.name);
            debugger
            return {
                ...state,
                name: action.episode.name,
                date: action.episode.air_date,
                number: action.episode.episode,
                episode: action.episode
            }
        }
        default:
            return state
    }    
}

export const setEpisode = (episode) => ({type: SET_EPISODE, episode})
export default episodeReduser;