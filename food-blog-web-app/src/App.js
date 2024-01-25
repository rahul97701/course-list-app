import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Meal from "./components/Meal";
import MealInfo from "./components/MealInfo";
import Error from "./components/Errors";


function App() {
  return (
  <> 
  
   <Header />
  <Routes>
          <Route path="/" element={<Meal />} />
          <Route path="/meal-search" element={<MealInfo />} />
  </Routes>

  <Footer />
 
  
  </>
  )

}

export default App;
