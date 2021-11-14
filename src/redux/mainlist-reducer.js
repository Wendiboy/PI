const SET_EPISODES = 'SET_EPISODES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_EPISODES_COUNT = 'SET_TOTAL_EPISODES_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
        episodes: [],
        totalEpisodesCount: 0,
        currentPage: 1,
        isFetching: true,
        followinInProgress: []
};


const mainListReduser = (state = initialState, action) => {
    switch (action.type){
        
        case SET_EPISODES:{
            return {...state, episodes: action.episodes}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_EPISODES_COUNT:{
            return {...state, totalEpisodesCount: action.count}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return {...state, 
                followinInProgress: action.isFetching 
                ?[...state.FollowingInProgress, action.episodeId]
                :state.FollowingInProgress.filter(id=> id!=action.episodeId)
            }
        }
        default:
            return state
    }    
}


export const setEpisodes = (episodes) => ({type: SET_EPISODES, episodes})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalEpisodesCount = (totalEpisodeCount) => ({type: SET_TOTAL_EPISODES_COUNT, count: totalEpisodeCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFolloingProgress = (isFetching, episodeId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, episodeId})

export default mainListReduser;