import {combineReducers} from 'redux'
import SignupReducer from './signupReducer'
import LoginReducer from './loginReducer'
import HomeReducer from './homeReducer'
import UserDetailReducer from './viewUserDetReducer'
import AllUserDetailReducer from './viewAllUserDetReducer'
import UserProfileReducer from './userProfileReducer'
const rootReducer = combineReducers({
    SignupReducer,
    LoginReducer,
    HomeReducer,
    UserDetailReducer,
    AllUserDetailReducer,
    UserProfileReducer
})

export default rootReducer;