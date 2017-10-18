import ActionTypes from '../actions/actionTypes'

const initialState = {}

function UserProfileReducer ( state = initialState ,action){
    switch(action.type){
        case ActionTypes.USER_PROFILE_REQUEST_SUCCESS: 
        return { ...state , UserProfileData:action.data}
        default : return state
    }
}


export default UserProfileReducer;