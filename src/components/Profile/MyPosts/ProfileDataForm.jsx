import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormControls";

const ProfileDataForm = ({handleSubmit, profile}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        <div>
            <b>Логин:</b><Field placeholder={"Логин"} name={"fullName"} validate={[]} component={Input} />
        </div>
        <div>
            <b>В поисках работы:</b>
            <Field placeholder={""} name={"lookingForAJob"} validate={[]} component={Input} type={"checkbox"} />
        </div>
        <div>
            <b>Мои проффесиональные навыки:</b>
            <Field placeholder={"Мои проффесиональные навыки"} name={"lookingForAJobDescription"}
                   validate={[]} component={Textarea} />
        </div>
        <div>
            <b>Обо мне:</b>
            <Field placeholder={"Обо мне"} name={"aboutMe"} validate={[]} component={Textarea} />
        </div>
        <div>
            <b>Контакты</b>: {Object.keys(profile.contacts).map(key => {
                return <div>
                    <b>{key}:</b>
                    <Field placeholder={key} name={"contacts." + key} validate={[]} component={Input} />
                </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;