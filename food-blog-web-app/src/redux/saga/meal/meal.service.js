export const getMealListService = async() => {
    
    let url = "http://localhost:3004/MealList";
    let response = await fetch(url, {method: "GET"});
    return response.json();
  
};

export const getMealInfoService = async() => {
    
    let url = "http://localhost:3004/MealInfo";
    let response = await fetch(url, {method: "GET"});
    return response.json();
  
};