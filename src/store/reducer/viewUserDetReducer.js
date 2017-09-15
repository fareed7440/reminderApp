import ActionTypes from '../actions/actionTypes'

const initialState = {}

function UserDetailReducer ( state = initialState ,action){
    switch(action.type){
        case ActionTypes.VIEW_USER_DETAIL_REQUEST_SUCCESS : 
        return { ...state , userDetail:action.data}
        default : return state
    }
}


export default UserDetailReducer;