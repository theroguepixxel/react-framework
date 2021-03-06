import { createStore, applyMiddleware, 
    compose }                           from "redux"
import createSagaMiddleware             from 'redux-saga'
import reducers                         from "./Reducers"
import sagas                            from "./Sagas"

const composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(sagas)

export default store