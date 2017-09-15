import {combineReducers} from 'redux'
import SignupReducer from './signupReducer'
import LoginReducer from './loginReducer'
import HomeReducer from './homeReducer'
import UserDetailReducer from './viewUserDetReducer'
const rootReducer = combineReducers({
    SignupReducer,
    LoginReducer,
    HomeReducer,
    UserDetailReducer
})

export default rootReducer;