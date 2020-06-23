import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {handleChangeMessageCreator, sendMessageCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    const dialogsElement = state.dialogs.map((item) => {
        return <DialogItem name={item.name} id={item.id}/>
    });

    const messagesElement = state.messages.map((message) => {
        return <Message message={message.message}/>
    });

    const onMessageBodyChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    const onSendMessage = () => {
        props.sendMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.dialogMessages}>
                {messagesElement}
                <div><textarea onChange={onMessageBodyChange} value={state.newMessageBody}/></div>
                <div>
                    <button onClick={onSendMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;