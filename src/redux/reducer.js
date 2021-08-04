import DISHES from "../data/dishes.js"
import COMMENTS from "../data/comments.js"




// initialState
const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    sample: "Hellow React"
}

// Reducer
export const Reducer = (state = initialState, action) => {
    // console.log(action);
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

