import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import housesReducer from "../redux/ducks/housesReducer";

const middleware = applyMiddleware(promiseMiddleware());

const store = createStore(housesReducer, middleware);

export default store;
