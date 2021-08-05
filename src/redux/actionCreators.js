import * as actionTypes from "./actionType.js";


export const addComment = (dishId, author, rating, comment) =>{
    return{
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            rating: rating,
            comment: comment
        }
    }
}