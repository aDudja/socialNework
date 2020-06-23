const ADD_POST = 'ADD_POST';
const HANDLE_CHANGE_POST = 'HANDLE_CHANGE_POST';

let initialState = {
    posts: [
        { id: 1, message: 'Привет как дела?' },
        { id: 2, message: 'Я застряла у тебя в паутине...' },
        { id: 3, message: 'Как вылезти?' },
    ],
    newPost: '',
};

const profileReducer = (state = initialState, action)=>{

    switch (action.type) {
        case 'ADD_POST':
            state.posts.push({id: state.posts.length + 1, message: state.newPost,})
            state.newPost = '';
            return state;
        case 'HANDLE_CHANGE_POST':
            state.newPost = action.text;
            return state;
        default:
            return state
    }
}

export const addPostActionCreator = ()=>({type: ADD_POST});
export const handleChangePostActionCreator = (text)=>({
    type: HANDLE_CHANGE_POST,
    text: text
});

export default profileReducer;