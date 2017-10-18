import ViewAllUserDetail from '../components/viewAllUserDetail'
import {connect} from 'react-redux'
import allUserDetailRequest from '../store/actions/viewAllUserDetAct'
import userProfileRequest  from '../store/actions/userProfileAct'
function mapStateToProps(state){
    console.log(state)
    return{
      Email : state.LoginReducer.login.email,
      AllDetail : state.AllUserDetailReducer.allUserDetail
    }
   
}

function mapDispatchToProps(dispatch){
return{
   
 AllUserDetailData : (data)=>dispatch(allUserDetailRequest(data)),
 email : (email)=>dispatch(userProfileRequest(email))
}
}



ViewAllUserDetailCon = connect (mapStateToProps,mapDispatchToProps)(ViewAllUserDetail)
export default ViewAllUserDetailCon;
