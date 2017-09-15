import ActionTypes from "./actionTypes"
import { Actions } from 'react-native-router-flux';
import * as DB from '../../firebase/database'

function allUserDetailRequest(data){
    console.log('datataa',data)
     
    return dispatch=>{
dispatch(AllUserDetailRequest());
  return DB.database.ref('Detail').on('value', snap => {
            const todo = [];
            snap.forEach(childSnapshot => {
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
            dispatch(AllUserDetailRequestSuccess(todo))
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