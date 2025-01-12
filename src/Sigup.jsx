import  Axios  from "axios";
import { useState } from "react";

const Signup=()=>{

    const[data,setData]=useState({name : '',email:'',phone : '',dob : '',pass : ''});


 const createAccount= async (e)=>{

    e.preventDefault();

    

    alert('Accout Created Successfully');
    await Axios.post('http://localhost:3000/Signup_data',data);

    setData({name : '',email:'',phone : '',dob : '',pass : ''});


 }

    const dataHandler=(e)=>{

        const{name,value}=e.target;

        setData({...data,[name]:value});


    }

   

    return(
        <>


         <div className="container fluid">

            <div className="row">
                <div className="col-md-12 ">
                    <h1 className="text-center fw-bold" style={{color:'#EA001E'}}>Urbanite</h1>
                    <h4 className="text-center fw-bold">Create an account</h4>

                    <div className="card w-50 m-auto shadow mt-3" style={{borderRadius:'10px'}}>
                        <div className="card-body fw-bold">
                            <form action="" onSubmit={(e)=>createAccount(e)}>
                            <label htmlFor="">Name :</label>
                            <input type="text" placeholder="enter your name" name="name" value={data.name} onChange={(e)=>dataHandler(e)} className="form-control " style={{border:'1px solid black'}}/>
                            <label htmlFor="" className="mt-2">Phone :</label>
                            <input type="text" placeholder="enter your phone" name="phone" value={data.phone} onChange={(e)=>dataHandler(e)} className="form-control" style={{border:'1px solid black'}} />
                            <label htmlFor="" className="mt-2">Email :</label>
                            <input type="email" placeholder="enter your email" name="email" value={data.email} onChange={(e)=>dataHandler(e)} className="form-control" style={{border:'1px solid black'}}/>
                            <label htmlFor="" className="mt-2">DOB :</label>
                            <input type="dob" placeholder="enter your dob" name="dob" value={data.dob} onChange={(e)=>dataHandler(e)} className="form-control" style={{border:'1px solid black'}} />
                            <label htmlFor="" className="mt-2">Password :</label>
                            <input type="password" placeholder="enter your strong password" value={data.pass} onChange={(e)=>dataHandler(e)} name="pass" className="form-control" style={{border:'1px solid black'}} />
                            <div className="text-center">
                            <button className="btn btn-outline-success px-4 mt-4">Create Account</button>

                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         </div>

        
        </>
    )
}

export default Signup;