import ActionTypes from "./actionTypes"
import { Actions } from 'react-native-router-flux';
import * as DB from '../../firebase/database'
import firebase from 'firebase'
function homeRequest(data){
    console.log('datataa',data)
    return dispatch=>{
dispatch(HomeRequest());
//let fireBaseUser = firebase.auth().currentUser.uid;
//console.log('curent user',fireBaseUser);
return DB.database.ref('/Detail/').push(data,function(err){
   if(err){
       alert(err)
   }
    else{
        dispatch(HomeRequestSuccess(data))
    }
})

    }
}




function HomeRequest(){
    return{
        type : ActionTypes.QUESTION_REQUEST
    }
}

function HomeRequestSuccess(data){
    return{
        type: ActionTypes.QUESTION_REQUEST_SUCCESS,
        data
    }
}


export default homeRequest;