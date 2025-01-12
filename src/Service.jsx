
import './Styles/Service.css';
import Slider from "react-slick";
import React from 'react';
import { NavLink } from "react-router-dom";

const Service = () => {

    const servies = [
        {
            id: 1,
            icons: <i class="fa-solid fa-phone"></i>,
            title: 'Phone Reservation',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?'
        },
        {
            id: 2,
            icons: <i class="fa-solid fa-money-bill"></i>,
            title: 'Special Rates',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?'
        },
        {
            id: 3,
            icons: <i class="fa-solid fa-road"></i>,
            title: 'One Way Rental',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?'
        },
        {
            id: 4,
            icons: <i class="fa-solid fa-umbrella"></i>,
            title: 'Life Insurance',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?'
        },
        {
            id: 5,
            icons: <i class="fa-solid fa-building"></i>,
            title: 'City to City',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?'
        },
        {
            id: 6,
            icons: <i class="fa-solid fa-car"></i>,
            title: 'Free Rides',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?'
        },
    ]

    const service_slick = [
        {
            id: 1,
            img: './assets/service-img1.jpeg',
            title: 'Person Name',
            prof: 'Profession',
            para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa accusamus officiis amet repellat expedita nam.'
        },
        {
            id: 2,
            img: './assets/service-img2.jpg',
            title: 'Person Name',
            prof: 'Profession',
            para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa accusamus officiis amet repellat expedita nam.'
        },
        {
            id: 3,
            img: './assets/service-img3.jpg',
            title: 'Person Name',
            prof: 'Profession',
            para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa accusamus officiis amet repellat expedita nam.'
        },
    ]



    const settings = {
        dots: true,            // Shows dots at the bottom
        infinite: true,        // Infinite scrolling
        speed: 500,            // Animation speed in ms
        slidesToShow: 2,       // Number of slides visible at once
        slidesToScroll: 1,     // Number of slides to scroll per click
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        centerPadding: "30px",

    };




    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0">
                        <div className="m-auto text-light service-page d-flex flex-column  " style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: "linear-gradient(rgba(31, 46, 78, 0.9), rgba(31, 46, 78, 0.9)),url(./assets/pagination-img.jpeg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh', backgroundAttachment: 'scroll' }}>
                            <h1 className="" style={{fontSize:'56px',fontWeight:'700'}}>Our Services</h1>
                            
                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb mt-4" >
                                    <li className="breadcrumb-item" ><NavLink to={'/'} style={{listStyle:'none',textDecoration:'none',color:'white'}}>Home</NavLink></li>
                                    <li className="breadcrumb-item"><NavLink to={'/pages'} style={{listStyle:'none',textDecoration:'none',color:'white'}}>Pages</NavLink></li>
                                    <li className="breadcrumb-item active"><NavLink to={'/service'} style={{listStyle:'none',textDecoration:'none',color:'white'}}>Service</NavLink></li>
                                </ol>
                            </nav>



                        </div>
                    </div>
                </div>

                {/* ************************************************************************************************************************** */}

                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <h1 style={{ fontSize: '48px', fontWeight: '700' }}>Cental <span style={{ color: '#ea001e' }}>Services</span> </h1>
                        <p className="my-3" style={{ fontSize: '16px', fontWeight: '400', color: '#6C757D' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium <br /> at cum harum,
                            excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
                    </div>
                </div>

                {/* ****************************************************************************************************************************** */}

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                {
                                    servies.map((val, index) => {
                                        return (
                                            <>

                                                <div className="col-md-4 mt-3">

                                                    <div className="card shadow card-1" style={{ height: '35vh', }}>
                                                        <div className="card-body text-center  car-service">
                                                            <h1 className="my-3">{val.icons}</h1>
                                                            <h3>{val.title}</h3>
                                                            <p>{val.para}</p>
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

                {/* ***************************************************************************************************************** */}

                <div className="row my-5">
                    <div className="col-md-12 p-0">
                        <div className="m-auto text-light service  " style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: "linear-gradient(rgba(31, 46, 78, 0.9), rgba(31, 46, 78, 0.9)),url(./assets/pagination-img.jpeg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh', backgroundAttachment: 'scroll' }}>
                            <div className='text-center'>
                                <h2><i class="fa-solid fa-thumbs-up"></i></h2>
                                <h1 className='mt-3'>829+</h1>
                                <h3 className='mt-3'>Happy Clients</h3>
                            </div>
                            <div className='text-center'>
                                <h2><i class="fa-solid fa-car"></i></h2>
                                <h1 className='mt-3'>56+</h1>
                                <h3 className='mt-3'>Number of Cars</h3>
                            </div>
                            <div className='text-center'>
                                <h2> <i class="fa-solid fa-building"></i></h2>
                                <h1 className='mt-3'>127+</h1>
                                <h3 className='mt-3'>Car Center</h3>
                            </div>
                            <div className='text-center'>
                                <h2><i class="fa-solid fa-clock"></i></h2>
                                <h1 className='mt-3'>589+</h1>
                                <h3 className='mt-3'>Total Kilometers</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ************************************************************************************************************************************ */}

                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <h1 style={{ fontSize: '48px', fontWeight: '700' }}>Our Clients <span style={{ color: '#ea001e' }}>Reviews</span> </h1>
                        <p className="my-3" style={{ fontSize: '16px', fontWeight: '400', color: '#6C757D' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium <br /> at cum harum,
                            excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
                    </div>
                </div>

                {/* **************************************************************************************************************** */}


                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row">
                                <Slider {...settings}>
                                    {
                                        service_slick.map((val, index) => {
                                            return (
                                                <>



                                                    <div className="col-md-6 ">

                                                        <div className="card p-3 " style={{ width: '600px', border: '1px solid black' }}>
                                                            <div className="card-header d-flex gap-4  ">
                                                                <img src={val.img} style={{ borderRadius: '50%' }} alt="" />
                                                                <div className='mt-2'>
                                                                    <h3 style={{ fontSize: '24px', fontWeight: '500', color: 'rbg(0,12,33)' }}>{val.title}</h3>
                                                                    <h6 style={{ fontSize: '16px', fontWeight: '400', color: 'rbg(110,118,132)' }}>{val.prof}</h6>
                                                                    <i class="fa-regular fa-star " style={{ color: 'red' }}></i>
                                                                    <i class="fa-regular fa-star"></i>
                                                                    <i class="fa-regular fa-star"></i>
                                                                    <i class="fa-regular fa-star"></i>
                                                                    <i class="fa-regular fa-star"></i>
                                                                </div>


                                                            </div>
                                                            <div className="card-body">
                                                                <p className='mt-2' style={{ fontSize: '16px', fontWeight: '400', color: 'rbg(33,37,41)' }}>{val.para}</p>
                                                            </div>
                                                        </div>


                                                    </div>


                                                </>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ********************************************************************************************************************** */}

                <div className="row mt-5">
                    <div className="col-md-12bg-danger  ">
                        <div className="m-auto text-light rent-car" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(./assets/car4.jpeg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '95vh', width: '85vw', backgroundAttachment: 'scroll', borderRadius: '15px', textAlign: 'right' }}>

                            <div className="row ">
                                <div className="col-md-12 mt-5" >
                                    <h2 className="mt-5 me-5">Rent Your Car</h2>
                                    <h1 className="my-4">Interested in Renting ?</h1>
                                    <p className="my-4">Don't hestitate and send us message</p>
                                    <div className="mt-5" style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }} >
                                        <button className="btn btn-lg text-light px-5" style={{ background: '#1F2E4E' }}>Whatsapp</button>
                                        <button className="btn btn-lg text-light px-5 me-5" style={{ background: '#EA001E' }}>Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}

export default Service;