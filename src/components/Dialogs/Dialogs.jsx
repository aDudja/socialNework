import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    const dialogsElement = state.dialogs.map((item) => {
        return <DialogItem name={item.name} id={item.id}/>
    });

    const messagesElement = state.messages.map((message) => {
        return <Message message={message.message}/>
    });

    let addNewMessage = (values)=>{
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.dialogMessages}>
                <div>{messagesElement}</div>
                < AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

let maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name={"newMessageBody"} placeholder={"New message"} />
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;