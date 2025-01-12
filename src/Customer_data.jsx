import Axios from "axios";
import React, { useEffect, useState } from "react";
import './Styles/Customer_data.css';
import { NavLink } from "react-router-dom";


const Customer_data = () => {

    const [data, setData] = useState([]);


    const fetchData = async () => {

        const response = await Axios.get('http://localhost:3000/Customer_data');

        console.log(response.data);

        setData(response.data);

    }

    useEffect(() => {
        fetchData()
    }, []);

    
   const deleteData = async (id)=>{

    var result = data.filter(val => val.id !==id);
    setData(result);

    await Axios.delete(`http://localhost:3000/Customer_data/${id}`);



   }





    return (
        <>



            <div className="row">
                <div className="col-md-12 ">
                    <div className="container text-center">
                       <marquee behavior="" direction="left"> <h1 className="mt-4" style={{  color: 'black',fontVariant:'small-caps' }}>Customer Details of <span style={{color:'#EA001E'}}>Car Reservation</span> </h1></marquee>
                        <div className="row text-center ">
                            {
                                data.map((val, index) => {

                                    return (
                                        <>


                                            <div className="col-md-4 mt-5 ">

                                                <div className="card customer-card  position-relative p-0" style={{ height: '75vh', textAlign: 'left', background: '#1F2E4E', color: 'white', borderRadius: '20px' }}>

                                                    <div className="card-header text-center" >
                                                        <h4 style={{ fontVariant: 'small-caps' }}>Customer Id : {val.id}</h4>
                                                    </div>
                                                    <div className="card-body m-auto customer-data p-0">
                                                        <img src="./assets/blog-car1.jpeg" alt="" className="card-img img-fluid " style={{filter:'brightness(20%)'}}/>
                                                        <div className="card-img-overlay " style={{marginTop:'60px'}}>
                                                        <h6> Name <i class="fa-solid fa-user"></i> : {val.name}</h6>
                                                        <h6>  Phone <i className="fa fa-phone"></i> : {val.phone}</h6>
                                                        <h6> Email <i className="fa fa-envelope"></i> : {val.email}</h6>
                                                        <h6> DOB <i class="fa-regular fa-calendar-days"></i> : {val.dob}</h6>
                                                        <h6> Driving License <i class="fa-solid fa-id-card"></i> : {val.drivinglicense}</h6>
                                                        <h6> Car Type <i class="fa-solid fa-car-side"></i>: {val.cartype}</h6>
                                                        <h6> Pickup Location <i class="fa-solid fa-truck-pickup"></i> : {val.pickuplocation}</h6>
                                                        <h6> Pickup Date <i class="fa-solid fa-clock"></i> : {val.pickupdate}</h6>
                                                        <h6> DropOff Location <i class="fa-solid fa-droplet"></i> : {val.dropofflocation}</h6>
                                                        <h6> DropOff Date <i className="fa-solid fa-clock"></i> : {val.dropoffdate}</h6>
                                                        <h6> Insurance <i class="fa-solid fa-business-time"></i> : {val.insurance}</h6>
                                                        <h6> GPS <i class="fa-solid fa-location-dot"></i> : {val.gps}</h6>
                                                        <h6> Child Seat <i class="fa-solid fa-person"></i> : {val.childseat}</h6>
                                                        <h6> Additonal Driver <i class="fa-solid fa-person"></i> : {val.additonaldriver}</h6>
                                                        <h6> Comments <i class="fa-solid fa-person"></i> : {val.comments}</h6>
                                                        </div>
                                                       
                                                    </div> 

                                                    <div className="card-offcanvas">
                                                        <button className="btn btn-md  px-4" style={{ background: 'black', color: 'white',borderRadius:'45%',border:'1px solid white' }} onClick={()=>{if (window.confirm('Are Your Sure  ?')) {deleteData(val.id)}} } ><i className="fa-solid fa-trash " style={{color:'#EA001E'}}></i> </button>
                                                        <NavLink to={`/customer_edit/${val.id}`}><button className="btn btn-md  px-4" style={{ background: 'black', color: 'white',borderRadius:'45%',border:'1px solid white' }}><i className="fa-solid fa-pen-to-square text-success" ></i></button></NavLink>
                                                    </div>

                                                   

                                                </div>

                                            </div>



                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

            
            






        </>
    )
}

export default Customer_data;