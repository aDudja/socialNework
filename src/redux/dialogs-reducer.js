const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Anton' },
        { id: 2, name: 'Alina' },
        { id: 3, name: 'Svetlana' },
    ], messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: '???' },
    ]
};

const dialogsReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: body,}]
            };

        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody)=>({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;

