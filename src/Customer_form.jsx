
import { useState } from 'react';
import './Styles/Customer_form.css';

import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Customer_form = () => {

    const nav = useNavigate();

    const [data, setData] = useState(
        {
            name: '',
            email: '',
            phone: '',
            dob: '',
            drivinglicense: '',
            cartype: '',
            pickuplocation: '',
            pickupdate: '',
            dropofflocation: '',
            dropoffdate: '',
            insurance: '',
            gps: false,
            childseat: false,
            additionaldriver: '',
            comments: ''


        }
    )

    const dataHandler = (e) => {

        const { name, value, type, checked } = e.target;

        setData({ ...data, [name]: type === 'checkbox' ? checked : value })

    }

    const Submitform = async (e) => {

        e.preventDefault();

        const validationErrors = validate(); 

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); 
        } else {
            setErrors({}); 

            try {
                console.log("Form data submitted:", data);

                
                 await Axios.post("http://localhost:3000/Customer_data", data);

               
                alert("Booking confirmed successfully!");
                setData({
                    name: "",
                    email: "",
                    phone: "",
                    dob: "",
                    drivinglicense: "",
                    cartype: "",
                    pickuplocation: "",
                    pickupdate: "",
                    dropofflocation: "",
                    dropoffdate: "",
                    insurance: "",
                    gps: false,
                    childseat: false,
                    additionaldriver: "",
                    comments: "",
                });

                nav('/customer_data');

            } catch (error) {
                console.error("Error submitting the form:", error);
                alert("An error occurred while submitting the form. Please try again later.");
            }
        }

    }

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!data.name.trim()) newErrors.name = "Name is required.";
        if (!data.email.trim() || !/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(data.email))
            newErrors.email = "Valid email is required.";
        if (!data.phone.trim() || !/^\d{10}$/.test(data.phone))
            newErrors.phone = "Valid 10-digit phone number is required.";
        if (!data.dob) newErrors.dob = "Date of birth is required.";
        if (!data.drivinglicense.trim()) newErrors.drivinglicense = "Driving license is required.";
        if (!data.cartype) newErrors.cartype = "Car type must be selected.";
        if (!data.pickuplocation.trim()) newErrors.pickuplocation = "Pick-up location is required.";
        if (!data.pickupdate) newErrors.pickupdate = "Pick-up date is required.";
        if (!data.dropofflocation.trim()) newErrors.dropofflocation = "Drop-off location is required.";
        if (!data.dropoffdate) newErrors.dropoffdate = "Drop-off date is required.";
        if (!data.insurance) newErrors.insurance = "Insurance must be selected.";
        return newErrors;
    };


    return (
        <>


            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-12 ">
                        <div id="customer-form" className='m-auto shadow border-none p-5' style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(./assets/car-home.jpg)',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                            <form action="" id='customer_form' className='text-light mx-4 ' onSubmit={(e) => Submitform(e)}>
                                <marquee behavior="" direction="left3
                                " >Please enter the requried details Carefully for <span style={{ color: '#EA001E' }}>Rental Car Booking</span> </marquee>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="" className='my-2'>Name :</label>
                                        <input type="text" placeholder='enter name' name='name' value={data.name} onChange={(e) => dataHandler(e)} className='form-control w-100' />
                                        {errors.name && <p className="text-danger">{errors.name}</p>}

                                    </div>


                                    <div className="col-md-6">

                                        <label htmlFor="" className='my-2'>Email :</label>
                                        <input type="email" placeholder='enter email' name='email' value={data.email} onChange={(e) => dataHandler(e)} className='form-control w-100' />
                                        {errors.email && <p className="text-danger">{errors.email}</p>}

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="" className='my-2'>Phone :</label>
                                        <input type="text" placeholder='enter phone' name='phone' value={data.phone} onChange={(e) => dataHandler(e)} className='form-control w-100' />
                                        {errors.email && <p className="text-danger">{errors.phone}</p>}

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="" className='my-2'>DOB :</label>
                                        <input type="datetime-local" placeholder='enter DOB' name='dob' value={data.dob} onChange={(e) => dataHandler(e)} className='form-control w-100' />
                                        {errors.email && <p className="text-danger">{errors.dob}</p>}

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="" className='my-2'>Driving License :</label>
                                        <input type="text" placeholder='enter Driving License' name='drivinglicense' value={data.drivinglicense} onChange={(e) => dataHandler(e)} className='form-control w-100' />
                                        {errors.drivinglicense && <p className="text-danger">{errors.drivinglicense}</p>}

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="" className='my-2'>Car Type's :</label>
                                        <select name="cartype" id="" value={data.cartype} onChange={(e) => dataHandler(e)} className='form-control w-100'>
                                            <option value="">Select</option>
                                            <option value="SUV">SUV</option>
                                            <option value="SEDAN">SEDAN</option>
                                            <option value="Luxury">Luxury</option>
                                        </select>
                                        {errors.cartype && <p className="text-danger">{errors.cartype}</p>}

                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="" className='my-2'>Pick-up Location :</label>
                                        <input type="text" name='pickuplocation' placeholder='enter pick-up location' onChange={(e) => dataHandler(e)} value={data.pickuplocation} className='form-control w-100' />
                                        {errors.pickuplocation && <p className="text-danger">{errors.pickuplocation}</p>}


                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="" className='my-2'>Pick-up Date :</label>
                                        <input type="datetime-local" name='pickupdate' placeholder='enter pick-up location' onChange={(e) => dataHandler(e)} value={data.pickupdate} className='form-control w-100' />
                                        {errors.pickupdate && <p className="text-danger">{errors.pickupdate}</p>}

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="" className='my-2'>Drop-off Location :</label>
                                        <input type="text" name='dropofflocation' placeholder='enter drop-off location' onChange={(e) => dataHandler(e)} value={data.dropofflocation} className='form-control w-100' />
                                        {errors.dropofflocation && <p className="text-danger">{errors.dropofflocation}</p>}

                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="" className='my-2'>Drop-off Date :</label>
                                        <input type="datetime-local" name='dropoffdate' placeholder='enter Drop-off Time' onChange={(e) => dataHandler(e)} value={data.dropoffdate} className='form-control w-100' />
                                        {errors.dropoffdate && <p className="text-danger">{errors.dropoffdate}</p>}


                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="" className='my-2'>Insurance :</label>
                                        <select name="insurance" id="" onChange={(e) => dataHandler(e)} value={data.insurance} className='form-control w-100'>
                                            <option value="">Select </option>
                                            <option value="Basic">Basic</option>
                                            <option value="Full Coverage">Full Coverage</option>
                                        </select>
                                        {errors.insurance && <p className="text-danger">{errors.insurance}</p>}


                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="" className='mt-5'>GPS : </label>
                                        <input type="checkbox" value={data.gps} onChange={(e) => dataHandler(e)} className='mx-3' name='gps' placeholder='gps' />

                                        <label htmlFor="" className='ms-5'>Child Seat :</label>
                                        <input type="checkbox" value={data.childseat} onChange={(e) => dataHandler(e)} className='mx-3' name='childseat' placeholder='child seat' /> <br />


                                    </div>


                                    <div className="col-md-12">

                                        <label htmlFor="" className='my-2'>Additional Driver :</label>
                                        <select name="additionaldriver" value={data.additionaldriver} onChange={(e) => dataHandler(e)} id="" className='form-control'>
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>

                                    <div className="col-md-12">

                                        <label htmlFor="" className='my-2'>Comments :</label>
                                        <textarea type="text" value={data.comments} onChange={(e) => dataHandler(e)} name='comments' placeholder='comment your opinion' className='form-control w-100' />

                                    </div>



                                    <div className='text-center my-4'>
                                        <button className='btn ' style={{ background: '#EA001E', color: 'white', fontWeight: 'bold' }} >Confirm Booking ...</button>
                                    </div>

                                </div>
                            </form>



                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Customer_form;