import {combineReducers} from "redux"
import catgoryReducer from "./categoryReducer"
import nonprofitReducer from "./nonprofitReducer"

const rootReducer = combineReducers({
    catgoryReducer, 
    nonprofitReducer
});

export default rootReducer