import * as actionTypes from "./actionType.js";
import DISHES from "../data/dishes.js";

// addComment 
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


// loadDishes
export const loadDishes = dishes =>{
    return{
        type: actionTypes.LOAD_DISHES,
        payload: dishes
    }
}

// loadDishes
export const dishesLoading = () =>{
    return{
        type: actionTypes.DISHES_LOADING
    }
}


// fetchDishes
export const fetchDishes = () =>{
    return dispatch =>{
        dispatch(dishesLoading());

        setTimeout(
            ()=> {
                dispatch(loadDishes(DISHES))
            },
                2000);
    }
}