import React from "react";
import './Styles/Blog.css';
import { NavLink } from "react-router-dom";

const Blog = () => {

    const blog_car = [
        {
            id: 1,
            img: './assets/blog-car1.jpeg',
            title: 'Rental Cars how to check driving fines?',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure inventore culpa ea, labore quisquam',


        },
        {
            id: 2,
            img: './assets/blog-car2.jpeg',
            title: 'Rental Cost of sports and other cars',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure inventore culpa ea, labore quisquam',


        },
        {
            id: 3,
            img: './assets/blog-car3.jpeg',
            title: 'Document required for all Car rentals ',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure inventore culpa ea, labore quisquam',


        }
    ]
    return (

        <>

            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-12 p-0">
                        <div className="m-auto text-light service-page d-flex flex-column  " style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: "linear-gradient(rgba(31, 46, 78, 0.9), rgba(31, 46, 78, 0.9)),url(./assets/pagination-img.jpeg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh', backgroundAttachment: 'scroll' }}>
                            <h1 className="" style={{ fontSize: '56px', fontWeight: '700' }}>Our Blogs & News</h1>

                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb mt-4" >
                                    <li className="breadcrumb-item" ><NavLink to={'/'} style={{ listStyle: 'none', textDecoration: 'none', color: 'white' }}>Home</NavLink></li>
                                    <li className="breadcrumb-item"><NavLink to={'/pages'} style={{ listStyle: 'none', textDecoration: 'none', color: 'white' }}>Pages</NavLink></li>
                                    <li className="breadcrumb-item active"><NavLink to={'/blog'} style={{ listStyle: 'none', textDecoration: 'none', color: 'white' }}>Blogs & News</NavLink></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* ******************************************************************************************************************** */}

                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <h1 style={{ fontSize: '48px', fontWeight: '700' }}>Cental <span style={{ color: '#ea001e' }}>Blog & News</span> </h1>
                        <p className="my-3" style={{ fontSize: '16px', fontWeight: '400', color: '#6C757D' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium <br /> at cum harum,
                            excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row">

                                {
                                    blog_car.map((val, index) => {
                                        return (
                                            <>

                                                <div className="col-md-4">
                                                    <div className="card" style={{ height: '100%' }}>
                                                        <div className="card-header p-0">
                                                            <img src={val.img} alt="" className="img-fluid " />

                                                        </div>
                                                        <div className="card-body my-4 d-flex flex-column gap-1">
                                                            <button className="btn btn-md text-light px-4 blog-btn">30 dec 2025</button>
                                                            <div className="d-flex justify-content-between">
                                                                <h6><i class="bi bi-person-fill" style={{ 'color': '#ea001e' }}></i> Martin.C</h6>
                                                                <h6><i class="bi bi-chat-left-fill" style={{ 'color': '#ea001e' }}></i> 6 Comments</h6>
                                                            </div>
                                                            <h4 className="my-2" style={{ fontSize: '24px', fontWeight: '500' }}>{val.title}</h4>
                                                            <p style={{ color: '#6C757D' }}>{val.para}</p>

                                                            <h6 className="mt-3" style={{ 'color': '#ea001e' }}>Read More <i class="bi bi-arrow-right" style={{ 'color': '#ea001e' }}></i></h6>

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


                {/* ***************************************************************************************************************************** */}

                <div className="row my-5">
                    <div className="col-md-12 p-0 ">
                        <div className="m-auto text-light blog" style={{ backgroundImage: "linear-gradient(rgba(31, 46, 78, 0.9), rgba(31, 46, 78, 0.9)),url(./assets/pagination-img.jpeg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh', backgroundAttachment: 'scroll', textAlign: 'right' }}>
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


                {/**************************************************************************************** */}

                <div className="row mt-5">
                    <div className="col-md-12bg-danger mt-5 ">
                        <div className="m-auto text-light rent-car" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(./assets/car4.jpeg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '95vh', width: '85vw', backgroundAttachment: 'scroll', borderRadius: '15px', textAlign: 'right' }}>

                            <div className="row ">
                                <div className="col-md-12 mt-5" >
                                    <h2 className="mt-5 me-5">Rent Your Car</h2>
                                    <h1 className="my-4">Interested in Renting ?</h1>
                                    <p className="my-4">Don't hestitate and send us message</p>
                                    <div className="mt-5" style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }} >
                                        <button className="btn btn-lg text-light px-4" style={{ background: '#1F2E4E' }}>Whatsapp</button>
                                        <button className="btn btn-lg text-light px-4 me-5" style={{ background: '#EA001E' }}>Contact Us</button>
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

export default Blog;