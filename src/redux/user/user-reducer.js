import {userActionType} from './user.type'

const initialState = {
    currentUser:null,

}



const userReducer = (state = initialState , action) => {
//DONT USER THIS.STATE = initialState
switch(action.type) {
    case userActionType.SET_CURRENT_USER:
        return{
        ...state,
        currentUser: action.payload
        }
    default:
       return state;
    
    }
    
}

export default userReducer;