import SignUpCon from './container/signupCon'
import React,{Component} from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginCon from './container/loginCon'
import HomeCon from './container/homeCon'
import ViewUserDetailCon from './container/viewUserDetCon'
import ViewAllUserDetailCon from './container/viewAllUserDetCon'
class Routing extends Component{
    render(){
        return(
 <Router > 

<Scene key = "signupCon">
    
       <Scene key="signupCon" component={SignUpCon} hideNavBar = {true} />
          <Scene key="loginCon" component={LoginCon} hideNavBar = {true} />
             <Scene key="homeCon" component={HomeCon} hideNavBar = {true} />
                <Scene key="viewUserDetCon" component={ViewUserDetailCon} hideNavBar = {false} title= "My Answers" />
                   <Scene key="viewAllUserDetCon" component={ViewAllUserDetailCon} hideNavBar = {false} title= "All Answers" />
         
        
            </Scene>


            </Router>

        )
    }
}



export default Routing;