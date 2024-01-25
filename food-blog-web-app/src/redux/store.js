import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import reducer from "./combinedReducer";
import { rootSaga } from "./rootSaga";

let sagaMiddleWare = createSagaMiddleWare();

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export default store;