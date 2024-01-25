import { setError } from "../../meal.slice";
import { getMealListService, getMealInfoService } from "./meal.service";
import { saveMealList, saveMealInfo} from "../../meal.slice";
import { call, put } from "redux-saga/effects"

export function* getMealListHandler(){

    try{
        console.log("get")
        let data = yield call(getMealListService);
        yield put (saveMealList(data));
    }catch(error){
        console.log(error);
        yield put(setError("Unable to get food list"))
    }
}

export function* getMealInfoHandler(){
   
try{
    console.log("get")
    let data = yield call(getMealInfoService);
    yield put (saveMealInfo(data));
}catch(error){
    console.log(error);
    yield put(setError("Unable to get food list"))
}
}