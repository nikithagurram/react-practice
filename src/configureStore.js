import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './store/reducers/rootReducer'
import {composeWithDevTools} from '@redux-devtools/extension';
import rootSaga from "./store/saga";


export default function configureStore(preloadedState) {
    const sagaMiddleware = createSagaMiddleware()
    const middlewareEnhancer = applyMiddleware(sagaMiddleware)


    const composedEnhancers = composeWithDevTools(middlewareEnhancer)
    // const composedEnhancers = compose(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)
    sagaMiddleware.run(rootSaga)
    return store



}