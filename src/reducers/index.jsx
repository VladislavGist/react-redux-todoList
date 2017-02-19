//redux
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

//reducers
import firstReducer from "./firstReducer.jsx";
import errorReducer from "./errorReduces.jsx";

export default combineReducers({
	routing: routerReducer,
	firstReducer,
	errorReducer
});