const SEND_MESSAGE = 'SEND_MESSAGE';
const HANDLE_CHANGE_MESSAGE = 'HANDLE_CHANGE_MESSAGE';

const dialogsReducer = (state, action)=>{
    if (action.type === SEND_MESSAGE) {
        state.messages.push({id: state.messages.length+1, message: state.newMessageBody,})
        state.newMessageBody='';
        return state;
    } else if (action.type === HANDLE_CHANGE_MESSAGE){
        state.newMessageBody = action.message
        return state;
    }

    return state;
}

export const sendMessageCreator = ()=>({type: SEND_MESSAGE});
export const handleChangeMessageCreator = (message)=>({type: HANDLE_CHANGE_MESSAGE, message: message});


export default dialogsReducer;

