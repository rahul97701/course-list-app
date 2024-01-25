import { useDispatch, useSelector } from "react-redux";
import { getMealList, saveMealList,  } from "../redux/meal.slice";
import { useEffect, useState } from "react";
import { map } from "react";
import { useNavigate } from "react-router-dom";


function Meal(){
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { MealList } = useSelector((state) => state.meals)
 
  useEffect(() => {
    if (MealList?.length === 0) dispatch(getMealList());
  }, []);
  return (
    <>
      <div className="container-fluid categories" style={{ marginTop: "60px"}}>
        <div className="container">
           {/* <button onClick={() => {
            dispatch(getMealList())
           }}> Get Data</button> */}
           <div className="d-flex justify-content-start catemobile gap-3">
            { MealList?.map((value, index) => {
              return (
                <div 
                key={index}
                className="items text center"
                onClick={() => 
                  navigate ('/mealinfo/${value.idMeal}?name=${value.strMeal}')
                }
                >
                   <div className="catimg card-title activator" style={{backgroundColor: "white", gap: "4rem", width:150}} >

                    <img width="300px" height="200px" src={value.strMealThumb} alt="" style={{marginLeft: 30, marginRight: 30}} />
                  </div>
                  <div className="catname">{value.strMeal}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
            
           {/* <div className="catimg">
                    <img width="64px" src={value.image} alt="" />
                  </div>
                  <div className="catname">{value.name}</div>
                </div>
           </div>
          </div>         */}
      
    </>
  )
}

export default Meal;