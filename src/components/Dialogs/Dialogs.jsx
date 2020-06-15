import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {handleChangeMessageCreator, sendMessageCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
  const dialogsElement = props.state.dialogs.map((item)=>{
    return <DialogItem name={item.name} id={item.id} />
  });
  
  const messagesElement = props.state.messages.map((message)=>{
    return <Message message={message.message} />
  });

  const onMessageBodyChange = (e)=>{
      let message = e.target.value;
      props.dispatch(handleChangeMessageCreator(message));
  }

  const onSendMessage = ()=>{
      props.dispatch(sendMessageCreator());
  }

  return (
      <div className={s.dialogs}>
          <div className={s.dialogItems}>
              {dialogsElement}
          </div>
          <div className={s.dialogMessages}>
              {messagesElement}
              <div><textarea onChange={onMessageBodyChange} value={props.state.newMessageBody} /></div>
              <div><button onClick={onSendMessage}>Отправить</button></div>
          </div>
      </div>
  );
}


export default Dialogs;