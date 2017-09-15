import {combineReducers} from 'redux'
import SignupReducer from './signupReducer'
import LoginReducer from './loginReducer'
import HomeReducer from './homeReducer'
import UserDetailReducer from './viewUserDetReducer'
import AllUserDetailReducer from './viewAllUserDetReducer'
const rootReducer = combineReducers({
    SignupReducer,
    LoginReducer,
    HomeReducer,
    UserDetailReducer,
    AllUserDetailReducer
})

export default rootReducer;