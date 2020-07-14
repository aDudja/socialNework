const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

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
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
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
        default:
            return state

    }
}

export const followAC = (userId)=>({type: FOLLOW, userId: userId});
export const unfollowAC = (userId)=>({type: UNFOLLOW, userId});
export const setUsersAC = (users)=>({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage)=>({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalUsersCount)=>({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});


export default usersReducer;