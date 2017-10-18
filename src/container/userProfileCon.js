import UserProfile from '../components/userProfile'
import {connect} from 'react-redux'
import userProfileRequest from '../store/actions/userProfileAct'
import ViewAllUserDetail from '../components/viewAllUserDetail'
function mapStateToProps(state){
    console.log(state)
    return{
      profiles : state.UserProfileReducer.UserProfileData
    }
   
}

function mapDispatchToProps(dispatch){
return{
   
 userProfileData : (data)=>dispatch(userProfileRequest(data)),
 //email : (email)=>dispatch(userProfileRequest(email))
}
}



UserProfileCon = connect (mapStateToProps,mapDispatchToProps)(UserProfile)
export default UserProfileCon;
