import { DELETE_USER, USER_SHOW } from "../Action/UserAction";

const initialState={
  USER_DATA:[]
}
export const UserReducer=(state = initialState, action)=>{

    switch(action.type){
        case USER_SHOW:
            return {
                ...state,
                USER_DATA:action.data,
            }
        case DELETE_USER:
            const email=action.data;
            return {
                // ...state,
                USER_DATA:state.USER_DATA.filter((d)=>{
                    return d.email!=email
                })
            }
        default:
            return state;
    }
}
export default UserReducer;