import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {handleChangeMessageCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    const onMessageBodyChange = (body) => {
        props.store.dispatch(handleChangeMessageCreator(body));
    }

    const onSendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    return <Dialogs updateNewMessageBody={onMessageBodyChange}
                    sendMessage={onSendMessage}
                    dialogsPage={state}
    />;
}


export default DialogsContainer;