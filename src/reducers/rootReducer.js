import {combineReducers} from "redux"
import categoryReducer from "./categoryReducer"
import nonprofitReducer from "./nonprofitReducer"

const rootReducer = combineReducers({
    categoryReducer, 
    nonprofitReducer
});

export default rootReducer