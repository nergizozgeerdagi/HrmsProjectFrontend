import { applyMiddleware,compose, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk';

const middlewares = [thunk];
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
);

export function configureStore() {
    return createStore(rootReducer,enhancer)
}