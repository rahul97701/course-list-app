
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EnquiryForm from "./components/EnquiryForm";
import CourseSearch from './components/CourseSearch';



function App() {
  return (
  <> 
  <Header />

  
  <Routes>
    
    <Route path="/" element={<CourseSearch />}/>
    <Route path="/courses" element={<CourseSearch />}/>

    <Route path="/enquiry-form/" element={<EnquiryForm />}/>
   

  </Routes>
 
  <Footer />
  </>
  )

}

export default App;
