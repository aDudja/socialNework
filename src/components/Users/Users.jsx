import React from "react";
import styles from "./users.module.css";
import noPhoto from "../../img/nophoto.jpg";
import {NavLink} from "react-router-dom";

let Users = (props)=> {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p=>{
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e)=> {props.onPageChanged(p)}}>{p+' '}</span>
            })}
        </div>
        {
            props.users.map(u=> <div key={u.id}>
                <NavLink to={'/profile/'+u.id}>
                    <img src={u.photos.small==null?noPhoto:u.photos.small} className={styles.userPhoto}/>
                </NavLink>

                <div>{ u.followed ?
                    <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> :
                    <button onClick={()=>{props.follow(u.id)}}>Follow</button>
                }
                </div>
                <div>{u.name}</div>
                <div>{u.id}</div>
                <hr />
            </div>)
        }
    </div>
}

export default Users;