import {takeEvery, put} from 'redux-saga/effects'
import {FETCH_TRANSACTION_DETAILS} from "../../reducers/trasactions/constants";
import Transactions from '../../static/sampelTransactions.json'
import {fetchTransactionListSuccess} from "../../reducers/trasactions/action";


export function* getList(){
const  data= yield Transactions;
yield put(fetchTransactionListSuccess(data))
}

export function* TransactionsList(){
    yield takeEvery(FETCH_TRANSACTION_DETAILS, getList)
}

export default TransactionsList;