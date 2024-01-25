import { getMealListWatcher, getMealInfoWatcher } from "./saga/meal/meal.watcher";
import { all } from "redux-saga/effects";

export function* rootSaga() {
   
    let effectList = [getMealListWatcher(), getMealInfoWatcher];
    yield all(effectList);
}