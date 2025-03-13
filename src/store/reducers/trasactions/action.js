import {FETCH_TRANSACTION_DETAILS, FETCH_TRANSACTION_DETAILS_SUCCESS} from "./constants";

export const fetchTransactionList = () => {
    return {
        type: FETCH_TRANSACTION_DETAILS
    }
}

export const fetchTransactionListSuccess = (data) => {
    return {
        type: FETCH_TRANSACTION_DETAILS_SUCCESS,
        data
    }
}
