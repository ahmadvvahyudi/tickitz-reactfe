import { combineReducers } from "redux"
import Movies from "../Reducers/Movies"
import Auth from "./Auth"

const rootReducer = combineReducers({
	movies: Movies,
    auth: Auth
})

export default rootReducer
