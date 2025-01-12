import './Styles/About.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {

    const cental_card = [

        {

            id: 1,
            title: 'Come In Contact',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!',
            num: '01'

        },
        {

            id: 2,
            title: 'Come In Contact',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!',
            num: '02'

        },
        {

            id: 3,
            title: 'Come In Contact',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!',
            num: '03'

        }
    ]

    const cus_sup = [
        {
            id: 1,
            img: './assets/cus-sup1.jpeg',
            title: 'Martin Doe',
            prof: 'Profession'

        },
        {
            id: 2,
            img: './assets/cus-sup2.jpeg',
            title: 'Martin Doe',
            prof: 'Profession'

        },
        {
            id: 3,
            img: './assets/cus-sup3.jpeg',
            title: 'Martin Doe',
            prof: 'Profession'

        },
        {
            id: 4,
            img: './assets/cus-sup4.jpeg',
            title: 'Martin Doe',
            prof: 'Profession'

        }
    ]

    return (
        <>

            <div className="container-fluid">

            <div className="row ">
                    <div className="col-md-12 p-0">
                        <div className="m-auto text-light service-page d-flex flex-column  " style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: "linear-gradient(rgba(31, 46, 78, 0.9), rgba(31, 46, 78, 0.9)),url(./assets/pagination-img.jpeg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh', backgroundAttachment: 'scroll' }}>
                            <h1 style={{fontSize:'56px',fontWeight:'700'}}>About Us</h1>
                            
                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb mt-4" >
                                    <li className="breadcrumb-item" ><NavLink to={'/'} style={{listStyle:'none',textDecoration:'none',color:'white'}}>Home</NavLink></li>
                                    <li className="breadcrumb-item"><NavLink to={'/pages'} style={{listStyle:'none',textDecoration:'none',color:'white'}}>Pages</NavLink></li>
                                    <li className="breadcrumb-item active"><NavLink to={'/about'} style={{listStyle:'none',textDecoration:'none',color:'white'}}>About</NavLink></li>
                                </ol>
                            </nav>



                        </div>
                    </div>
                </div>

                {/* ************************************************************************************************************ */}
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 ">

                                    <h1 style={{ fontSize: '42px', fontWeight: '700' }}>Cental <span style={{ color: '#ea001e' }}>About</span> </h1>
                                    <p style={{ 'fontSize': '16px', fontWeight: '400', color: '#6C757D' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, vero labore quos quasi quaerat non aliquam consequatur! Fugit provident qui minima sed deserunt porro ipsam eius dolor ullam, est quod.</p>

                                    <div className="d-flex gap-3">
                                        <div className="card w-50 about-card" style={{ height: '35vh', background: '#F2F2F2' }}>
                                            <div className="card-body text-center">
                                                <img src="./assets/aboutimg1.png" alt="" className="img-fluid w-25 my-3" />
                                                <h3 style={{ 'fontSize': '20px', fontWeight: '500', color: 'rbg(0,12,33)' }}>Our Vision</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                            </div>
                                        </div>
                                        <div className="card w-50 about-card" style={{ height: '35vh', background: '#F2F2F2' }}>
                                            <div className="card-body text-center">
                                                <img src="./assets/about-icon-2.png" alt="" className="img-fluid w-25 my-3" />
                                                <h3 style={{ 'fontSize': '20px', fontWeight: '500', color: 'rbg(0,12,33)' }}>Our Mission</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mt-3" style={{ 'fontSize': '16px', fontWeight: '400', color: '#6C757D' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque aut error maxime nam adipisci! Veniam, vitae optio. Totam temporibus, eius, quaerat minima rem ut reiciendis id distinctio suscipit vitae aspernatur?</p>

                                    <div className="row mt-4">
                                        <div className="col-md-6 ">
                                            <div className="card text-center" style={{ background: '#1F2E4E', color: 'white' }}>
                                                <div className="card-body">
                                                    <h1 style={{ fontSize: '40px', fontWeight: '700' }}>17</h1>
                                                    <h3 style={{ fontSize: '20px', fontWeight: '500' }}>Years Of Experience</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 ">
                                            <h6 style={{ 'fontSize': '16px', fontWeight: '400', color: '#6C757D' }}> <i class="bi bi-check-circle" style={{ color: '#ea001e' }}></i> Morbi tristique senectus</h6>
                                            <h6 style={{ 'fontSize': '16px', fontWeight: '400', color: '#6C757D' }}> <i class="bi bi-check-circle" style={{ color: '#ea001e' }}></i> A scelerisque purus</h6>
                                            <h6 style={{ 'fontSize': '16px', fontWeight: '400', color: '#6C757D' }}> <i class="bi bi-check-circle" style={{ color: '#ea001e' }}></i> Dictumst vestibulum</h6>
                                            <h6 style={{ 'fontSize': '16px', fontWeight: '400', color: '#6C757D' }}> <i class="bi bi-check-circle" style={{ color: '#ea001e' }}></i> dio aenean sed adipiscing</h6>
                                        </div>
                                        <div className="col-md-6  text-center ">

                                            <button className="btn btn-lg px-4 text-light mt-5" style={{ background: '#ea001e' }} >More About Us</button>

                                        </div>
                                        <div className="col-md-6 about-exp gap-4 text-center">
                                            <img src="./assets/attachment-img.jpg" className="img-fluid my-4" alt="" style={{ borderRadius: '50%', border: '5px solid #1F2E4E' }} />
                                            <div>
                                                <h1 style={{ fontSize: '23px', fontWeight: '500', color: 'rgb(0,12,33)' }} className="mt-5">William Burgess</h1>
                                                <p style={{ 'fontSize': '16px', fontWeight: '400', color: '#6C757D' }} >Carve Founder</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex ">
                                    <div className="container">
                                        <img src="./assets/about-key.jpeg" className="img-fluid " style={{ borderRadius: '10px', height: '90vh', width: '90%' }} alt="" />
                                        <img src="./assets/about-key2.jpeg" className="img-fluid about-key1" alt="" style={{ height: '50vh',position:'relative',top:'-150px',right:'-60px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ************************************************************************************************************************** */}

                <div className="row my-5">
                    <div className="col-md-12 p-0">
                        <div className="m-auto text-light about" style={{ backgroundImage: "linear-gradient(rgba(31, 46, 78, 0.9), rgba(31, 46, 78, 0.9)),url(./assets/pagination-img.jpeg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh', backgroundAttachment: 'scroll', textAlign: 'right' }}>
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
                {/* ****************************************************************************************************** */}

                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <h1 style={{ fontSize: '48px', fontWeight: '700' }}>Cental <span style={{ color: '#ea001e' }}>Features</span> </h1>
                        <p className="my-3" style={{ fontSize: '16px', fontWeight: '400', color: '#6C757D' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium <br /> at cum harum,
                            excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
                    </div>
                </div>
                <div className="container"  >
                    <div className="row">

                        <div className="col-md-4 cental-feature">
                            <div className="d-flex gap-5 ">
                                <h1 className="ms-3"><i class="bi bi-trophy-fill"></i></h1>
                                <div>
                                    <h3>First Class Services</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                                </div>
                            </div>
                            <div className="d-flex gap-5 ">
                                <h1 className="ms-3"><i class="fa-solid fa-road"></i></h1>
                                <div>
                                    <h3>24/7 road assistance</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">

                            <img src="./assets/about-car.png" className="img-fluid w-100" alt="" />
                        </div>
                        <div className="col-md-4 cental-feature">
                            <div className="d-flex gap-5 " style={{ textAlign: 'right' }}>
                                <div>
                                    <h3>First Class Services</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                                </div>
                                <h1 className="me-3"><i class="fa fa-tag"></i></h1>
                            </div>
                            <div className="d-flex gap-5 " style={{ textAlign: 'right' }}>
                                <div>
                                    <h3>24/7 road assistance</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam <br /> ullam magni eligendi?</p>
                                </div>
                                <h1 className="me-3"><i class="fa fa-map-pin"></i></h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* *********************************************************************************************************************** */}

                <div className="row mt-5">
                    <div className="col-md-12 p-0">
                        <div id="cental-process" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url('/assets/cental-process.jpeg')", backgroundSize: 'cover', height: '70vh', backgroundPosition: 'center', backgroundAttachment: 'scroll', backgroundRepeat: 'no-repeat', }}>

                            <div className="container">
                                <div className="row my-5">
                                    <div className="col-md-12 text-center">
                                        <h1 className="mt-5" style={{ fontSize: '48px', fontWeight: '700', color: 'white' }}>Cental <span style={{ color: '#ea001e' }}>Features</span> </h1>
                                        <p className="my-3" style={{ fontSize: '16px', fontWeight: '400', color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium <br /> at cum harum,
                                            excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
                                    </div>
                                </div>

                                {/* ****************************************************************************************** */}

                                <div className="row">
                                    {

                                        cental_card.map((val, index) => {
                                            return (
                                                <>

                                                    <div className="col-md-4">
                                                        <div className="card text-light" style={{ background: '#1F2E4E', borderRadius: '10px' }}>
                                                            <div className="card-body">

                                                                <h1 style={{ fontSize: '24px', fontWeight: '500' }}>{val.title}</h1>
                                                                <p style={{ fontSize: '16px', fontWeight: '400' }}>{val.para}</p>
                                                                <div style={{ height: '60px', width: '60px', border: '2px solid white', borderRadius: '50%', position: 'absolute', right: '25px', bottom: '-20px', background: '#1F2E4E', fontSize: '16px', fontWeight: '900' }}>
                                                                    <p className="text-center mt-3">{val.num}</p>
                                                                </div>
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
                </div>

                {/* ***************************************************************************************************************************** */}

                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row my-5">
                                <div className="col-md-12 text-center">
                                    <h1 className="mt-5" style={{ fontSize: '48px', fontWeight: '700', color: '#000C21' }}>Customer <span style={{ color: '#ea001e' }}>Support</span> Center</h1>
                                    <p className="my-3" style={{ fontSize: '16px', fontWeight: '400', color: '#7B828F' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium <br /> at cum harum,
                                        excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
                                </div>
                            </div>

                            <div className="row ">
                                {
                                    cus_sup.map((val, index) => {

                                        return (
                                            <>

                                                <div className="col-md-3 mt-4">

                                                    <div className="card  text-center" style={{ background: '#F2F2F2', height: '55vh', boxShadow: 'none', border: 'none' }}>



                                                        <div className="card-body cus-sup" >
                                                            <img src={val.img} className="img-fluid w-75 m-auto " style={{ position: 'absolute', right: '30px', top: '0px', bottom: '150px', borderRadius: '10px' }} alt="" />
                                                            <h1 className="mt-2" style={{ fontSize: '24px', fontWeight: '500', color: '#000C21' }}>{val.title}</h1>
                                                            <h5 style={{ fontSize: '16px', fontWeight: '400', color: '#7B828F' }}>{val.prof}</h5>
                                                            <div className="d-flex justify-content-center gap-3">
                                                                <div style={{ height: '20px', width: '20px', borderRadius: '50%', border: '1px solid white' }}><i class="bi bi-facebook" style={{ color: '#ea001e' }}></i></div>
                                                                <div style={{ height: '20px', width: '20px', borderRadius: '50%', border: '1px solid white' }}><i class="bi bi-instagram" style={{ color: '#ea001e' }}></i></div>
                                                                <div style={{ height: '20px', width: '20px', borderRadius: '50%', border: '1px solid white' }}><i class="bi bi-twitter" style={{ color: '#ea001e' }}></i></div>
                                                                <div style={{ height: '20px', width: '20px', borderRadius: '50%', border: '1px solid white' }}><i class="bi bi-linkedin" style={{ color: '#ea001e' }}></i></div>
                                                            </div>
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

                {/* ************************************************************************************************************************ */}

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



            </div>
        </>
    )
}

export default About;