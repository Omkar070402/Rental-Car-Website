import { useEffect, useState } from 'react';
import './Styles/Login.css';
import Axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

    const [data, setData] = useState({ email: '', pass: '' });
    const [error, setError] = useState("");
    const nav = useNavigate()



    const submitform = async (e) => {
        e.preventDefault();
        setError('');
        const response = await Axios.get('http://localhost:3000/Signup_data');
        const users = response.data;

        try {
            const user = users.find(
                (user) => user.email === data.email && user.pass === data.pass
            )

            if (user) {

                alert('Login Successfully');
                nav("/customer_form");
            } else {

                setError("Invalid email or password.");
            }
        } catch (err) {
            console.error("Error fetching login data:", err);
            setError("Something went wrong. Please try again later.");
        }


    }



    const dataHandler = (e) => {

        const { name, value } = e.target;

        setData({ ...data, [name]: value })


    }

    return (
        <>

            <div className="container-fluid">
                <div className="row" >
                    <div className="col-md-12 mt-3">
                        <div className="container" >
                            <div className="row " style={{ height: '90vh' }}>
                                <div className="col-md-8 text-center  login-1 ">
                                    <h1 style={{ textAlign: 'left' }}>Urbanite</h1>
                                    <p>Find Premium Cars for you journey now , trying to connect lives with our transportation facilites . Carrying you smile with us and with millions of People  </p>
                                </div>
                                <div className="col-md-4  login-2">
                                    <div className="card shadow  " style={{ borderRadius: '20px', height: '65vh' }}>

                                        <div className="card-body text-center d-flex flex-column fw-bold ">
                                            <h4 className='mt-3 fw-bold'>Login to Urbanite</h4>
                                            <form action="" onSubmit={(e) => submitform(e)}>
                                                <input type="email" placeholder='enter your email' name='email' value={data.email} onChange={(e) => dataHandler(e)} className='form-control mt-3' style={{ height: '7vh', border: '1px solid black' }} />
                                                <input type="password" placeholder='enter your password' name='pass' value={data.pass} onChange={(e) => dataHandler(e)} className='form-control mt-3' style={{ height: '7vh', border: '1px solid black' }} />
                                                <button className='btn px-4 bg-success text-light mt-4 fw-bold'>Login</button>
                                                <p className='mt-3 text-primary'>Forgotten Password ?</p>
                                            </form>


                                            <hr />
                                            <p>Don't have an account ?</p>
                                            <NavLink to={'/signup'}><button className='btn px-4 fw-bold text-light' style={{ background: '#0866FF' }}>Create a New Account</button></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login;