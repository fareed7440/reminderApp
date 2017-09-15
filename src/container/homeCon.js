import Home from '../components/home'
import {connect} from 'react-redux'
import homeRequest from '../store/actions/homeAct'
function mapStateToProps(state){
    console.log(state)
    return{
      myAnswers : state.HomeReducer.homeData,
      Email : state.LoginReducer.login.email
    }
   
}

function mapDispatchToProps(dispatch){
return{
   
 HomeData : (data)=>dispatch(homeRequest(data))
}
}



HomeCon = connect (mapStateToProps,mapDispatchToProps)(Home)
export default HomeCon;
