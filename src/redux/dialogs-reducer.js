const SEND_MESSAGE = 'SEND_MESSAGE';
const HANDLE_CHANGE_MESSAGE = 'HANDLE_CHANGE_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: state.messages.length + 1, message: body,}]
            };
        case HANDLE_CHANGE_MESSAGE:
            return {
                ...state,
                newMessageBody: action.message,
            };
        default:
            return state
    }
}

export const sendMessageCreator = ()=>({type: SEND_MESSAGE});
export const handleChangeMessageCreator = (message)=>({type: HANDLE_CHANGE_MESSAGE, message: message});


export default dialogsReducer;

