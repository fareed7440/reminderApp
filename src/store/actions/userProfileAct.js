import ActionTypes from "./actionTypes"
import { Actions } from 'react-native-router-flux';
import * as DB from '../../firebase/database'
import firebase from "firebase"
function userProfileRequest(email) {
    console.log('email', email)
    return dispatch => {
        dispatch(UserProfileRequest());
        let fireBaseUser = firebase.auth().currentUser.uid;
        return DB.database.ref('/Detail').orderByChild('email').equalTo(email).on('value', snap => {
            var data = snap.val();
            if(data==null){
                alert('there is no data of coresponding user')
            }
            console.log("data", data);
            // console.log("uid",firebase.auth().currentUser.uid);
            var mData = [];
            for (let key in data) {
                data[key].key = key
                mData.push(data[key])

            }
            console.log("madata", mData)
            dispatch(UserProfileRequestSuccess(mData))
        });
    }



}





function UserProfileRequest() {
    return {
        type: ActionTypes.USER_PROFILE_REQUEST
    }
}

function UserProfileRequestSuccess(data) {
    return {
        type: ActionTypes.USER_PROFILE_REQUEST_SUCCESS,
        data
    }
}


export default userProfileRequest;