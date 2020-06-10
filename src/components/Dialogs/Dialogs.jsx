import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
  const dialogsElement = props.dialogs.map((item)=>{
    return <DialogItem name={item.name} id={item.id} />
  });
  
  const messagesElement = props.messages.map((message)=>{
    return <Message message={message.message} />
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElement}
      </div>
      <div className={s.dialogMessages}>
        {messagesElement}
      </div>
    </div>
  );
}


export default Dialogs;