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
      ]
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
    if (action.type === 'ADD-POST') {
      this._state.profilePage.posts.push({id: this._state.profilePage.posts.length+1, message: this._state.profilePage.newPost,});
      this._callSubscriber();
    } else if (action.type === 'HANDLE-CHANGE'){
      this._state.profilePage.newPost = action.text;
      this._callSubscriber();
    }
  }


}

export default store;
