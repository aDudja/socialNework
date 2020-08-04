import React, {useEffect, useState} from "react";

const ProfileStatusWithUseState = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)
    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const diactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({status: this.props.status})
    //     }
    // }

        return (
            <div>
                {!editMode &&
                <div>
                    <span onClick={activateEditMode}>{props.status || '[text]'}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={diactivateEditMode} value={status} />
                </div>
                }
            </div>
        )

}

export default ProfileStatusWithUseState;