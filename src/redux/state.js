import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD_POST';
const HANDLE_CHANGE_POST = 'HANDLE_CHANGE_POST';

const SEND_MESSAGE = 'SEND_MESSAGE';
const HANDLE_CHANGE_MESSAGE = 'HANDLE_CHANGE_MESSAGE';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Привет как дела?' },
        { id: 2, message: 'Я застряла у тебя в паутине...' },
        { id: 3, message: 'Как вылезти?' },
      ],
      newPost: '',
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: 'Anton' },
        { id: 2, name: 'Alina' },
        { id: 3, name: 'Svetlana' },
      ], messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: '???' },
      ],
      newMessageBody: '',
    },
  },
  _callSubscriber(){},

  getState(){
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },

  addPost(){
    this._state.profilePage.posts.push({id: this._state.profilePage.posts.length+1, message: this._state.profilePage.newPost,});
    this._callSubscriber();
  },
  handleChange(newText){
    this._state.profilePage.newPost = newText;
    this._callSubscriber();
  },

  dispatch(action){
    this._state.profilePage=profileReducer(this._state.profilePage,action);
    this._state.messagesPage=dialogsReducer(this._state.messagesPage,action);
    this._callSubscriber();
  //   if (action.type === 'ADD_POST') {
  //     this._state.profilePage.posts.push({id: this._state.profilePage.posts.length+1, message: this._state.profilePage.newPost,})
  //     this._state.profilePage.newPost='';
  //     this._callSubscriber(this._state);
  //   } else if (action.type === 'HANDLE_CHANGE_POST'){
  //     this._state.profilePage.newPost = action.text;
  //     this._callSubscriber(this._state);
  //   } else if (action.type === SEND_MESSAGE) {
  //     this._state.messagesPage.messages.push({id: this._state.messagesPage.messages.length+1, message: this._state.messagesPage.newMessageBody,})
  //     this._state.messagesPage.newMessageBody='';
  //     this._callSubscriber(this._state);
  //   } else if (action.type === HANDLE_CHANGE_MESSAGE){
  //     this._state.messagesPage.newMessageBody = action.message;
  //     this._callSubscriber(this._state);
  //   }
   }
}

// export const addPostActionCreator = ()=>({type: ADD_POST});
// export const handleChangePostActionCreator = (text)=>({
//   type: HANDLE_CHANGE_POST,
//   text: text
// });
//
// export const sendMessageCreator = ()=>({type: SEND_MESSAGE});
// export const handleChangeMessageCreator = (message)=>({type: HANDLE_CHANGE_MESSAGE, message: message});

export default store;
