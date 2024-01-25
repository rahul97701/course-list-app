import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { resetError } from "../redux/meal.slice";
import Swal from "sweetalert";


let Errors = () => {
    let dispatch = useDispatch();
    let { error } = useSelector((state) => state.food);
    useEffect(() => {
        if(error.isError) {
            Swal.fire({
              title: 'Error!',
              text: error.message,
              icon: "error",
              confirmButtonText: "Ok",
              timer: 2000,
              timerProgressBar: true,
            }).then(() => {
                dispatch(resetError())
            });
        }
    }, [error]);
    return <>
    </>
};

export default Errors;