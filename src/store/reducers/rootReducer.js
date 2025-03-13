import {combineReducers} from "redux";
import saveLoginReducer from './Login/reducer'
import transactionsReducer from "./trasactions/reducer";

const rootReducer = combineReducers({
   saveLogin: saveLoginReducer,
   transactions: transactionsReducer
})

export default rootReducer