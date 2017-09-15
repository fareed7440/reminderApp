import ActionTypes from '../actions/actionTypes'

const initialState = {}

function HomeReducer ( state = initialState ,action){
    switch(action.type){
        case ActionTypes.QUESTION_REQUEST_SUCCESS : 
        return { ...state , homeData:action.data}
        default : return state
    }
}


export default HomeReducer;