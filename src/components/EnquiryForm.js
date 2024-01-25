
import { useForm } from 'react-hook-form';
import { useState } from 'react';


function EnquiryForm() {
    let [inputText, setInputText ] = useState();
    let [value, setValue ] = useState();
   let { register, handleSubmit } = useForm();
   let onSubmit = data => {
    console.log(data);
   };
   let saveData = () => {
    setValue(inputText);
   }

//    let changeInput = (e) => setInputText((e.target.value))
   return (
        <>
        <div className=" flex justify-center lg:h-screen items-center" style= {{backgroundColor: 'aquamarine'}}>
            <div className="card w-full md:w-96 items-center shadow-2xl bg-base-100"   style={{marginTop:120}}>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full lg:w-96" style={{backgroundColor: 'aquamarine'}}>
                    <div className="form-control"  style={{marginBottom:20}}>
                        <label className="label" htmlFor='userValue'>
                            <span className="label-text">Name</span>
                        </label>
                        <input
                        {...register("name", {required: true })}
                            type="name"
                            value={inputText} 
                            // onChange={changeInput}
                            id="userValue"
                            placeholder="Name" className="input input-bordered" style={{marginLeft: 20, width:300}}/>

                    </div>

                    <div className="form-control" style={{marginBottom:20}}>
                        <label className="label" htmlFor='userValue'>
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {required: true })}

                            type="email" placeholder="Email" 
                            value={inputText}
                            // onChange={changeInput}
                            id="userValue"
                            
                            className="input input-bordered" style={{marginLeft: 20, width:300}}/>

                    </div>
                    <div className="form-control" style={{marginBottom:20}}>
                        <label className="label" htmlFor='userValue'>
                            <span className="label-text">Address</span>
                        </label>
                        <input
                         {...register("address", {required: true })}

                            type="address"
                            // onChange={changeInput}
                            value={inputText}
                            id="userValue"
                             placeholder="address" className="input input-bordered" style={{marginLeft: 20, width:300}}/>
                    </div>
                    <div className="form-control mt-6" style={{marginBottom:20}}>
                        <button onClick={saveData}    type="submit" className="btn btn-primary">Send Enquiry</button>
                    </div>

                </form>

            </div>
        </div>
        </>
    );
};


export default EnquiryForm;