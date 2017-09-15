import ActionTypes from "./actionTypes"
import { Actions } from 'react-native-router-flux';
import * as DB from '../../firebase/database'

function homeRequest(data){
    console.log('datataa',data)
    return dispatch=>{
dispatch(HomeRequest());
return DB.database.ref('/Detail').push(data,function(err){
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