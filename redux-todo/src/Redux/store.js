import { createStore } from "redux";
import { rootReducers } from "./Reducer/rootReducer";
 export const store = createStore(
   rootReducers /* preloadedState, */,
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
 );
