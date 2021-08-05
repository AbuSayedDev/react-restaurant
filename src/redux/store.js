import { createStore, applyMiddleware } from "redux";
import {Reducer} from "./reducer.js";
import logger from "redux-logger";


const MyStore = createStore(Reducer, applyMiddleware(logger)); 


export default MyStore;