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

  dispatch(action){
    this._state.profilePage=profileReducer(this._state.profilePage,action);
    this._state.messagesPage=dialogsReducer(this._state.messagesPage,action);
    this._callSubscriber();
   }
}

export default store;
