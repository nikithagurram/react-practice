import {all, call} from 'redux-saga/effects'
import TransactionsList from "./transactionsList";

export function* rootSaga(){
    yield all([
          call(TransactionsList)
    ])
}

export default rootSaga;