const ADD_POST = 'ADD_POST';
const HANDLE_CHANGE_POST = 'HANDLE_CHANGE_POST';

const profileReducer = (state, action)=>{

    if (action.type === 'ADD_POST') {
        state.posts.push({id: state.posts.length+1, message: state.newPost,})
        state.newPost='';
        return state;
    } else if (action.type === 'HANDLE_CHANGE_POST') {
        state.newPost = action.text;
        return state;
    }
    return state;
}

export const addPostActionCreator = ()=>({type: ADD_POST});
export const handleChangePostActionCreator = (text)=>({
    type: HANDLE_CHANGE_POST,
    text: text
});

export default profileReducer;