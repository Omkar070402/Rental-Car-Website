
import React from "react";
import { NavLink } from "react-router-dom";


const Contact = () => {

    const contact_card = [

        {
            id: 1,
            icons: <i className="fa fa-location-dot"></i>,
            title: 'Address',
            info: '123 Street New York.USA'
        },
        {
            id: 2,
            icons: <i className="fa-solid fa-envelope"></i>,
            title: 'Address',
            info: '123 Street New York.USA'
        },
        {
            id: 3,
            icons: <i className="fa fa-phone"></i>,
            title: 'Address',
            info: '123 Street New York.USA'
        },
        {
            id: 4,
            icons: <i className="fa fa-firefox-browser"></i>,
            title: 'Address',
            info: '123 Street New York.USA'
        },
    ]

    const contact_card2=[
        {
            id : 1,
            title : 'Our Branch 01',
            para1 : `Address: 123  Street New York.USA `,
            para2 : 'Telephone:(+012) 3456 7890'
        },
        {
            id : 2,
            title : 'Our Branch 02',
            para1 : 'Address: 123  Street New York.USA ',
            para2 : 'Telephone:(+012) 3456 7890'
        },
        {
            id : 3,
            title : 'Our Branch 03',
            para1 : 'Address: 123  Street New York.USA ',
            para2 : 'Telephone:(+012) 3456 7890'
        },
    ]

    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-12 p-0">
                        <div className="m-auto text-light service-page d-flex flex-column  " style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: "linear-gradient(rgba(31, 46, 78, 0.9), rgba(31, 46, 78, 0.9)),url(./assets/pagination-img.jpeg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh', backgroundAttachment: 'scroll' }}>
                            <h1 className="" style={{ fontSize: '56px', fontWeight: '700' }}>Contact Us</h1>

                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb mt-4" >
                                    <li className="breadcrumb-item" ><NavLink to={'/'} style={{ listStyle: 'none', textDecoration: 'none', color: 'white' }}>Home</NavLink></li>
                                    <li className="breadcrumb-item"><NavLink to={'/pages'} style={{ listStyle: 'none', textDecoration: 'none', color: 'white' }}>Pages</NavLink></li>
                                    <li className="breadcrumb-item active"><NavLink to={'/contact'} style={{ listStyle: 'none', textDecoration: 'none', color: 'white' }}>Contact</NavLink></li>
                                </ol>
                            </nav>



                        </div>
                    </div>
                </div>

                {/* ************************************************************************************************** */}

                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <h1 style={{ fontSize: '48px', fontWeight: '700' }}><span style={{ color: '#ea001e' }}>Contact Us</span> </h1>
                        <p className="my-3" style={{ fontSize: '16px', fontWeight: '400', color: '#6C757D' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium <br /> at cum harum,
                            excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row">
                                {
                                    contact_card.map((val, index) => {
                                        return (
                                            <>


                                                <div className="col-md-3">
                                                    <div className="card text-center" style={{ background: '#F2F2F2', height: '30vh' }}>
                                                        <div className="card-body mt-3">
                                                            <h1 style={{ color: '#1F2E4E' }}>{val.icons}</h1>
                                                            <h3 className="mt-4" style={{ fontSize: '23px', fontWeight: '500' }}>{val.title}</h3>
                                                            <p style={{ fontSize: '16px', fontWeight: '400', color: '#747B89' }}>{val.info}</p>
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

                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row p-3">
                                <div className="col-md-5  p-0">
                                    <div className="text-center" style={{ height: '90vh', border: '1px solid #1F2E4E', background: '#1F2E4E', borderRadius: '20px' }}>


                                        <div className="row p-5">
                                            <div className="col-md-12">
                                                <h3 style={{ fontSize: '24px', fontWeight: '500', color: 'rgb(234,0,30)', textAlign: 'left' }} >Send us Message</h3>
                                            </div>
                                            <div className="col-md-12 d-flex gap-3 mt-3">

                                                <input type="text" placeholder="Your Name" className="form-control p-3" />
                                                <input type="email" placeholder="Your Email" className="form-control" />
                                            </div>
                                            <div className="col-md-12 d-flex gap-3 mt-4">
                                                <input type="text" placeholder="Your Phone" className="form-control p-3" />
                                                <input type="text" placeholder="Your Project" className="form-control" />
                                            </div>
                                            <div className="col-md-12 d-flex gap-3 mt-4">
                                                <input type="text" placeholder="Your Name" className="form-control p-3" />
                                                <input type="email" placeholder="Your Email" className="form-control" />
                                            </div>
                                            <div className="col-md-12 mt-4">
                                                <input type="text" placeholder="Subject" className="form-control p-3" />
                                            </div>
                                            <div className="col-md-12 mt-4">
                                                <textarea name="" placeholder="Message" id="" className="form-control p-3"></textarea>
                                            </div>
                                            <div className="col-md-12 mt-4">
                                                <button className="btn w-100 bg-light" style={{ color: 'rgb(234,0,30)' }} >Send Message</button>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                                <div className="col-md-2  " style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'20px'}}>

                                    <div className="text-center" style={{ height: '63px', width: '60px', border: '1px solid #F2F2F2', borderRadius: '50%',color: 'rgb(234,0,30)', background: '#F2F2F2' }}>
                                        <h5><i className="fa-brands fa-facebook mt-4"></i></h5>
                                    </div>
                                    <div className="text-center" style={{ height: '63px', width: '60px', border: '1px solid #F2F2F2', borderRadius: '50%',color: 'rgb(234,0,30)', background: '#F2F2F2' }}>
                                        <h5><i className="fa-brands fa-instagram mt-4"></i></h5>
                                    </div>
                                    <div className="text-center" style={{ height: '63px', width: '60px', border: '1px solid #F2F2F2', borderRadius: '50%',color: 'rgb(234,0,30)', background: '#F2F2F2' }}>
                                        <h5><i className="fa-brands fa-twitter mt-4"></i></h5>
                                    </div>
                                    <div className="text-center" style={{ height: '63px', width: '60px', border: '1px solid #F2F2F2', borderRadius: '50%',color: 'rgb(234,0,30)', background: '#F2F2F2' }}>
                                        <h5><i className="fa-brands fa-linkedin mt-4"></i></h5>
                                    </div>

                                </div>
                                <div className="col-md-5 " style={{background:'#F2F2F2'}}>
                                    <div className="row">
                                        {
                                            contact_card2.map((val,index)=>{
                                                return(
                                                    <>
                                                    
                                                    <div className="col-md-10 mt-3 m-auto">

                                                        <div className="card mt-4" style={{border:'none'}}>
                                                            <div className="card-body">
                                                                <h2 style={{fontSize:'24px',fontWeight:'500',color:' rgb(0, 12, 33)'}}>{val.title}</h2>
                                                                <p>{val.para1}</p>
                                                                <p>{val.para2}</p>
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
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12 ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d774382.6761693481!2d-73.979681!3d40.69748800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1734272826594!5m2!1sen!2sbd" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;