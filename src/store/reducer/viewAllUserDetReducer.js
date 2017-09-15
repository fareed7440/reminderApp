import ActionTypes from '../actions/actionTypes'

const initialState = {}

function AllUserDetailReducer ( state = initialState ,action){
    switch(action.type){
        case ActionTypes.VIEW_ALL_USER_DETAIL_REQUEST_SUCCESS: 
        return { ...state , allUserDetail:action.data}
        default : return state
    }
}


export default AllUserDetailReducer;