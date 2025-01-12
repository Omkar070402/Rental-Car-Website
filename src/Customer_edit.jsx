import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Customer_edit = () => {

    const { id } = useParams();

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


    const fetchData = async () => {

        const result = await Axios.get(`http://localhost:3000/Customer_data/${id}`);

        setData(
            {
                name: result.data.name,
                email: result.data.email,
                phone: result.data.phone,
                dob: result.data.dob,
                drivinglicense: result.data.drivinglicense,
                cartype: result.data.cartype,
                pickuplocation: result.data.pickuplocation,
                pickupdate: result.data.pickupdate,
                dropofflocation: result.data.dropofflocation,
                dropoffdate: result.data.dropoffdate,
                insurance: result.data.insurance,
                gps: result.data.gps,
                childseat: result.data.gps,
                additionaldriver: result.data.additionaldriver,
                comments: result.data.comments


            }
        )

    }

    const dataHandler = (e) => {

        const { name, value } = e.target;

        setData({ ...data, [name]: value });

    }


    useEffect(() => { fetchData() }, []);


    const UpdateForm = async (e) => {

        e.preventDefault();

        await Axios.put(`http://localhost:3000/Customer_data/${id}`, data);

        nav('/customer_data');

    }


    return (
        <>

            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-12 ">
                        <div id="customer-form" className='m-auto shadow border-none p-5' style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(./assets/car4..jpeg)',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                            <form action="" id='customer_form' className='text-light  mx-4 ' onSubmit={(e) => UpdateForm(e)} >
                                <marquee behavior="" direction="left" >Please enter the requried details Carefully for <span style={{ color: '#EA001E' }}>Updation of Your Rental Car Booking</span> </marquee>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="" className='my-2'>Name :</label>
                                        <input type="text" placeholder='enter name' name='name' value={data.name} onChange={(e) => dataHandler(e)} className='form-control w-100' />


                                    </div>


                                    <div className="col-md-6">

                                        <label htmlFor="" className='my-2'>Email :</label>
                                        <input type="email" placeholder='enter email' name='email' value={data.email} onChange={(e) => dataHandler(e)} className='form-control w-100' />

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="" className='my-2'>Phone :</label>
                                        <input type="text" placeholder='enter phone' name='phone' value={data.phone} onChange={(e) => dataHandler(e)} className='form-control w-100' />


                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="" className='my-2'>DOB :</label>
                                        <input type="datetime-local" placeholder='enter DOB' name='dob' value={data.dob} onChange={(e) => dataHandler(e)} className='form-control w-100' />

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="" className='my-2'>Driving License :</label>
                                        <input type="text" placeholder='enter Driving License' name='drivinglicense' value={data.drivinglicense} onChange={(e) => dataHandler(e)} className='form-control w-100' />

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="" className='my-2'>Car Type's :</label>
                                        <select name="cartype" id="" value={data.cartype} onChange={(e) => dataHandler(e)} className='form-control w-100'>
                                            <option value="">Select</option>
                                            <option value="SUV">SUV</option>
                                            <option value="SEDAN">SEDAN</option>
                                            <option value="Luxury">Luxury</option>
                                        </select>


                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="" className='my-2'>Pick-up Location :</label>
                                        <input type="text" name='pickuplocation' placeholder='enter pick-up location' onChange={(e) => dataHandler(e)} value={data.pickuplocation} className='form-control w-100' />


                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="" className='my-2'>Pick-up Date :</label>
                                        <input type="datetime-local" name='pickupdate' placeholder='enter pick-up location' onChange={(e) => dataHandler(e)} value={data.pickupdate} className='form-control w-100' />


                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="" className='my-2'>Drop-off Location :</label>
                                        <input type="text" name='dropofflocation' placeholder='enter drop-off location' onChange={(e) => dataHandler(e)} value={data.dropofflocation} className='form-control w-100' />


                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="" className='my-2'>Drop-off Date :</label>
                                        <input type="datetime-local" name='dropoffdate' placeholder='enter Drop-off Time' onChange={(e) => dataHandler(e)} value={data.dropoffdate} className='form-control w-100' />



                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="" className='my-2'>Insurance :</label>
                                        <select name="insurance" id="" onChange={(e) => dataHandler(e)} value={data.insurance} className='form-control w-100'>
                                            <option value="">Select </option>
                                            <option value="Basic">Basic</option>
                                            <option value="Full Coverage">Full Coverage</option>
                                        </select>



                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="" className='mt-5'>GPS : </label>
                                        <input type="checkbox" value={data.gps} onChange={(e) => dataHandler(e)} className='mx-3' name='gps' placeholder='gps' />

                                        <label htmlFor="" className='ms-5'>Child Seat :</label>
                                        <input type="checkbox" value={data.childseat} onChange={(e) => dataHandler(e)} className='mx-3' name='childseat' placeholder='child seat' /> <br />


                                    </div>


                                    <div className="col-md-12">

                                        <label htmlFor="" className='my-2'>Additional Driver :</label>
                                        <select name="additionaldriver" value={data.additionaldriver} onChange={(e) => dataHandler(e)} id="" className="form-control">
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
                                        <button className='btn ' style={{ background: '#EA001E', color: 'white', fontWeight: 'bold' }} >Update Data</button>
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

export default Customer_edit;