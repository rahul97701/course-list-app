import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveCourseList } from "../redux/course.slice";
import { useNavigate } from "react-router-dom";

function CourseSearch(){
   
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let getCourseList = async () => {
        try {
            let url = "http://localhost:3004/courses";
            let response = await fetch(url, {method: "GET" });

            let data = await response.json();
            console.log(data);
            // setList(data);s
            dispatch(saveCourseList(data));
        } catch (error) {
            console.log(error);
        }
    };
    

    useEffect(() => {
        console.log('mounting');
          getCourseList();

          return () => {
            console.log("unmounting");
          }
    },[]);


return (
    <>
       <div className="container container-md pt-5 mt-5">
        <div className="row mt-5">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card" >
      <div className="card-body" >
        <img src="./img/java.png" className="java-logo" alt="java_logo" style={{height: 100}}/>
        <h5 className="card-title">Java Course</h5>
        <p className="card-text">Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers write once, and run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.</p>
        <a onClick={() => navigate("/enquiry-form")} className="btn btn-primary" alt="enquiry">Enquiry</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <img src="./img/python.png" className="python-logo" alt="python_logo" style={{height: 125}}/>
        <h5 className="card-title">Python Course</h5>
        <p className="card-text">Python is a high-level, general-purpose, and interpreted programming language used in various sectors including machine learning, artificial intelligence, data analysis, web development, and many more. Python is known for its ease of use, powerful standard library, and dynamic semantics.
</p>
        <a onClick={() => navigate("/enquiry-form")} className="btn btn-primary" alt="enquiry1">Enquiry</a>
      </div>
    </div>
  </div>
</div>
</div>
</>
    );
}

export default CourseSearch;
