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
    return state
}

