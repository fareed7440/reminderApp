import ViewUserDetail from '../components/viewUserDetail'
import {connect} from 'react-redux'
import userDetailRequest from '../store/actions/viewUserDetAct'
function mapStateToProps(state){
    console.log(state)
    return{
      Email : state.LoginReducer.login.email,
      Detail : state.UserDetailReducer.userDetail
    }
   
}

function mapDispatchToProps(dispatch){
return{
   
 UserDetailData : (data)=>dispatch(userDetailRequest(data))
}
}



ViewUserDetailCon = connect (mapStateToProps,mapDispatchToProps)(ViewUserDetail)
export default ViewUserDetailCon;
