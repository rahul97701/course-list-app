import { takeLatest } from "redux-saga/effects";
import { getMealList, getMealInfo } from "../../meal.slice";
import { getMealListHandler, getMealInfoHandler} from "./meal.handler";

export function* getMealListWatcher(){
    console.log("watcher");
    yield takeLatest(getMealList.type, getMealListHandler);
}

export function* getMealInfoWatcher(){
    console.log("watcher");
    yield takeLatest(getMealInfo.type, getMealInfoHandler);
}