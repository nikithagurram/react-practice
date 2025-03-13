import {FETCH_TRANSACTION_DETAILS_SUCCESS} from "./constants";

const initialState = {
    transactionDetails: []
}
export default function transactionsReducer(state=initialState, action ){
switch (action.type){
    case FETCH_TRANSACTION_DETAILS_SUCCESS:
        return {...state, transactionDetails: action.data}
    default:
        return initialState

}
}