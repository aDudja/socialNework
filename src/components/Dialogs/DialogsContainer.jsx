import React from 'react';
import {handleChangeMessageCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state)=>{
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        updateNewMessageBody: (body)=>{
            dispatch(handleChangeMessageCreator(body));
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;