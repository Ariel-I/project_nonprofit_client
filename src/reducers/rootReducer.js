import catgoryReducer from "./categoryReducer"
import nonprofitReducer from "./nonprofitReducer"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    categories: catgoryReducer, 
    nonprofits: nonprofitReducer
});

export default rootReducer