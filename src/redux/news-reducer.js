const SET_NEWS = 'SET_NEWS';


let initialState = {
    news : [],
};

const newsReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SET_NEWS: {
            return {  ...state, news: action.news}
        }
        default:
            return state

    }
}

export const setNews = (news)=>({type: SET_NEWS, news: news});


export default newsReducer;