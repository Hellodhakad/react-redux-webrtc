import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { rootReducer } from '../_reducers/rootreducers.js';

//logger MiddleWare for logging actions and states(prev and next)
const loggerMiddleware = createLogger();
//Create a Store
export const store = createStore(
   rootReducer, //Assign reducer to store
   applyMiddleware(loggerMiddleware) //Apply middlewares
);
