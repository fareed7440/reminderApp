import ActionTypes from "./actionTypes"
import { Actions } from 'react-native-router-flux';
import * as DB from '../../firebase/database'

function userDetailRequest(data){
    //console.log('datataa',data)
     
    return dispatch=>{
dispatch(UserDetailRequest());
 var userEmail = DB.auth.currentUser.email
         console.log('oooooooooooooo', userEmail)
  return DB.database.ref('Detail').orderByChild('email').equalTo(userEmail).on('value', snap => {
      console.log('snapinggg', snap)
            const todo = [];
            snap.forEach(childSnapshot => {
                console.log('childSnapshot.val();',childSnapshot.val())
                var innerTodo = childSnapshot.val();
                innerTodo.key = childSnapshot.key;
                if (childSnapshot.hasChild('comments')) {
                    var customComments = Object.keys(childSnapshot.val().comments).map(key => { return { key: childSnapshot.val().comments[key] } })
                    console.log(customComments);
                    innerTodo.comments = customComments;
                    todo.push(innerTodo);
                } else {
                    todo.push(innerTodo);
                    
                }
            })
            dispatch(UserDetailRequestSuccess(todo))
        });



    }
}




function UserDetailRequest(){
    return{
        type : ActionTypes.VIEW_USER_DETAIL_REQUEST
    }
}

function UserDetailRequestSuccess(data){
    return{
        type: ActionTypes.VIEW_USER_DETAIL_REQUEST_SUCCESS,
        data
    }
}


export default userDetailRequest;