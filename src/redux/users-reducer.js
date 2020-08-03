import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [
        // { id: 1, photoUrl: 'https://as2.ftcdn.net/jpg/02/70/38/55/500_F_270385541_4IFzgljjqy4H3ZHFB6Ba7tEnCCAGdV6X.jpg',
        //     followed: false, name: 'Dmitriy', status: 'Hello world', location: {city: 'Minsk', county: 'Belarus'} },
        // { id: 2, photoUrl: 'https://as2.ftcdn.net/jpg/01/95/32/27/500_F_195322722_B2Zr3HLgUDAigEmyJOQDlcnx8iU75Ix7.jpg',
        //     followed: false, name: 'Ivan', status: 'Im boss', location: {city: 'Moscow', county: 'Russia'} },
        // { id: 3, photoUrl: 'https://as2.ftcdn.net/jpg/01/95/32/27/500_F_195322718_F4lbfiDza4zFOZFL53ey9RuNPwIYfBpl.jpg',
        //     followed: true, name: 'Oleg', status: 'love dogs', location: {city: 'Tula', county: 'Russia'} },
        // { id: 4, photoUrl: 'https://as1.ftcdn.net/jpg/02/50/03/40/500_F_250034056_jYmeZO2sdsFJ5qjOg2MiT6OqnO63g7wF.jpg',
        //     followed: false, name: 'Petr', status: 'LA', location: {city: 'USA', county: 'USA'} },
    ],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress:  []
};

const usersReducer = (state = initialState, action)=>{
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {  ...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;

    }
}

export const followSuccess = (userId)=>({type: FOLLOW, userId: userId});
export const unfollowSuccess = (userId)=>({type: UNFOLLOW, userId});
export const setUsers = (users)=>({type: SET_USERS, users});
export const setCurrentPage = (currentPage)=>({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount)=>({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
            });
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    unfollowSuccess(userId)
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

export default usersReducer;