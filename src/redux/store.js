import { createStore, applyMiddleware } from "redux";
import {Reducer} from "./reducer.js";
import logger from "redux-logger";
import thunk from "redux-thunk";




const MyStore = createStore(Reducer, applyMiddleware(logger, thunk)); 

export default MyStore;