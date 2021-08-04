import { createStore } from "redux";
import {Reducer} from "./reducer.js";



const MyStore = createStore(Reducer); 


export default MyStore;