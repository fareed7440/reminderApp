import ActionTypes from "./actionTypes"
import { Actions } from 'react-native-router-flux';
import * as DB from '../../firebase/database'
import firebase from "firebase"
function allUserDetailRequest(data){
    console.log('datataa',data)
     
    return dispatch=>{
dispatch(AllUserDetailRequest());
let fireBaseUser = firebase.auth().currentUser.uid;
  return DB.database.ref('Detail/').on('value', snap => {
            var data = snap.val();
            console.log("data",data);
            // console.log("uid",firebase.auth().currentUser.uid);
            var mData = [];
            for (let key in data) {
                data[key].key=key
                mData.push(data[key])
                
            }
            console.log("madata",mData)
            dispatch(AllUserDetailRequestSuccess(mData))
        });
    }



    }





function AllUserDetailRequest(){
    return{
        type : ActionTypes.VIEW_ALL_USER_DETAIL_REQUEST
    }
}

function AllUserDetailRequestSuccess(data){
    return{
        type: ActionTypes.VIEW_ALL_USER_DETAIL_REQUEST_SUCCESS,
        data
    }
}


export default allUserDetailRequest;