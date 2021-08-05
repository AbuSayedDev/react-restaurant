import DISHES from "../data/dishes.js"
import COMMENTS from "../data/comments.js"
import { combineReducers } from "redux";
import * as actionTypes from '../redux/actionType.js'


/*

// Multiple Reducers  function

// initialState
const initialState = {
    dishes: DISHES,
    comments: COMMENTS
}

// Reducer
export const Reducer = (state = initialState, action) => {
    if(action.type === "ADD_COMMENT"){
        let comment = action.payload;
        comment.id = state.comments.length;
        comment.date = new Date().toDateString();
        return{
            ...state,
            comments: state.comments.concat(comment)
        }
    }
    return state
}

*/



// Combining Multiple Reducers  function


const dishReducer = (dishState = DISHES, action) =>{
    switch(action.type){
        default:
            return dishState;
    }
}


const commentReducer = (commentState = COMMENTS, action) =>{
    
    //switch CONDITIONS
    switch(action.type){
        case actionTypes.ADD_COMMENT :
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString(); 

            return commentState.concat(comment);
        default: 
            return commentState;
    }

//IF CONDITIONS
    // if(action.type === actionTypes.ADD_COMMENT ) {
    //     let comment = action.payload;
    //     comment.id = commentState.length;
    //     comment.date = new Date().toDateString(); 

    //     return commentState.concat(comment);
    // }
    // return commentState;
}

// Reducer
export const Reducer = combineReducers({
    dishes:dishReducer,
    comments:commentReducer
});