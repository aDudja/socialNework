import React from "react";
import styles from "./users.module.css";
import noPhoto from "../../img/nophoto.jpg";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow})=> {
    return <div>
                <NavLink to={'/profile/'+user.id}>
                    <img src={user.photos.small==null?noPhoto:user.photos.small} className={styles.userPhoto}/>
                </NavLink>

                <div>{ user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={()=>{unfollow(user.id)}
                    }>Unfollow</button> :
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={()=>{follow(user.id)}
                    }>Follow</button>
                }
                </div>
                <div>{user.name}</div>
                <div>{user.id}</div>
                <hr />
            </div>

}

export default User;