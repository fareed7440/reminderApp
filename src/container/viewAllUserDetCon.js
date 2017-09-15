import ViewAllUserDetail from '../components/viewAllUserDetail'
import {connect} from 'react-redux'
import allUserDetailRequest from '../store/actions/viewAllUserDetAct'
function mapStateToProps(state){
    console.log(state)
    return{
      Email : state.LoginReducer.login.email,
      AllDetail : state.AllUserDetailReducer.allUserDetail
    }
   
}

function mapDispatchToProps(dispatch){
return{
   
 AllUserDetailData : (data)=>dispatch(allUserDetailRequest(data))
}
}



ViewAllUserDetailCon = connect (mapStateToProps,mapDispatchToProps)(ViewAllUserDetail)
export default ViewAllUserDetailCon;
