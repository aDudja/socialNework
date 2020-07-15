const ADD_POST = 'ADD_POST';
const HANDLE_CHANGE_POST = 'HANDLE_CHANGE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Привет как дела?' },
        { id: 2, message: 'Я застряла у тебя в паутине...' },
        { id: 3, message: 'Как вылезти?' },
    ],
    newPost: '',
    profile: null,
};

const profileReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, message: state.newPost,}],
                newPost: '',
            }

        case HANDLE_CHANGE_POST:
            return {
                ...state,
                newPost: action.text
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        default:
            return state

    }
}

export const addPostActionCreator = ()=>({type: ADD_POST});
export const handleChangePostActionCreator = (text)=>({
    type: HANDLE_CHANGE_POST,
    text: text
});
export const setUserProfile = (profile)=>({type: SET_USER_PROFILE, profile})

export default profileReducer;