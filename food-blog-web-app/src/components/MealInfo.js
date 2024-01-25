import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { getMealInfo, saveMealInfo} from "../redux/meal.slice";
import { get } from "react-hook-form";
import { useParams,useSearchParams } from "react-router-dom";


function MealInfo(){
    let dispatch = useDispatch();
    // let { d_id } = useParams();
    // let [URLSearchParams ] = useSearchParams();

    let { MealInform } = useSelector((state) => state.mealInfo)

     useEffect(() => {
        if (MealInform?.length === 0)
       dispatch(getMealInfo([]));
    }, []);
 
return (
    <>
    <div className="container brown-text text-darken-2 mb-3" style={{ backgroundColor: "aquamarine", height:200, width: 300}}>
     
      <div className="margin-tb row  mb-3 meal-info" style={{marginTop: 100}}>
        <button onClick={() => {
            console.log(getMealInfo)
            dispatch(getMealInfo())
           }}> Get Data</button>
      {/* <h5> All Oroducts {URLSearchParams.get("strMeal")}</h5> */}
      {MealInform?.map((value, index) => {
            return (
              <div key={value.idMeal} 
           className="col s12 m5 push-m3 mb-3">
            <h4 className="center-align">
              <span>{value.strMeal}</span>
            </h4>
            <img
              className="materialboxed responsive-img"
              src={value.strMealThumb}
              alt={`${value.strMeal} meal`}
            />
          </div>
        
            )
            })};
              </div>
          </div>
          </>
          );
          }
          
         
export default MealInfo;