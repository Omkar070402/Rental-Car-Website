import React from "react";
import './Styles/Footer.css';

const Footer = () => {

    return (
        <>


            <div className="container-fluid ">
                <div className="row mt-5" style={{background:'#000C21'}}>
                    <div className="col-md-12 ">
                      <div className="container">
                      <div className="row p-5">
                            <div className="col-md-3  footer-part1">
                                <h3>About us</h3>
                                <p className="mt-5" style={{lineHeight:'25px'}}>Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                                <div className="d-flex mt-5">
                                <input type="text"   className="form-control rounded-pill p-2" placeholder="Enter your email" style={{width:'100%'}} />
                                 <button className="btn px-4 btn-sm  ms-2" >Subscribe</button>
                                 </div>
                            </div>
                            <div className="col-md-3 footer-part2">
                                <h3>Quick Links</h3>
                                <p className="mt-2"><i class="fa fa-angle-right"></i> About</p>
                                <p><i class="fa fa-angle-right"></i> Cars</p>
                                <p><i class="fa fa-angle-right"></i> Car Types</p>
                                <p><i class="fa fa-angle-right"></i> Team</p>
                                <p><i class="fa fa-angle-right"></i> Contact</p>
                                <p><i class="fa fa-angle-right"></i> Terms & Conditions</p>

                            </div>
                            <div className="col-md-3 footer-part3">
                                <h3>Business Hours </h3>
                                <div className="mt-4">
                                <h3 style={{fontSize:'16px',fontWeight:'400',color:' rgb(110, 118, 132)'}}>Mon-Friday</h3>
                                <p style={{fontSize:'16px',fontWeight:'400',color:' rgb(255, 255, 255)'}}>09.00 am to 07.00 pm</p>
                                </div>
                                <div>
                                <h3 style={{fontSize:'16px',fontWeight:'400',color:' rgb(110, 118, 132)'}}>Saturday:</h3>
                                <p style={{fontSize:'16px',fontWeight:'400',color:' rgb(255, 255, 255)'}}>10.00 am to 05.00 pm</p>
                                </div>
                                <div>
                                <h3 style={{fontSize:'16px',fontWeight:'400',color:' rgb(110, 118, 132)'}}>Vacation:</h3>
                                <p style={{fontSize:'16px',fontWeight:'400',color:' rgb(255, 255, 255)'}}>All Sunday is our vacation</p>
                                </div>

                            </div>
                            <div className="col-md-3 footer-part4">
                                <h3>Contact Info</h3>
                                <h5 className="mt-4"><i className="fa fa-location-dot"></i> 123 Street, New York, USA</h5>
                                <h5 className="mt-4"><i className="fa-solid fa-envelope"></i> info@gmail.com</h5>
                                <h5 className="mt-4"> <i className="fa fa-phone"></i> +012 345 67890</h5>
                                <h5 className="mt-4"><i className="fa fa-print"></i>  +012 345 67890</h5>
                                <div className="d-flex gap-4 mt-4 text-light">
                               <h4><i class="fa-brands fa-facebook"></i></h4> 
                                <h4><i class="fa-brands fa-instagram"></i></h4>
                                <h4><i class="fa-brands fa-twitter"></i></h4>
                                <h4><i class="fa-brands fa-linkedin"></i></h4>
                                
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 text-light">
                            <hr />
                        </div>
                      </div>
                      <div className="container">
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-between">
                                <p style={{color:'#6E7684'}}> <u><span className="text-light"><i class="fa-solid fa-copyright"></i> Urbanite, </span></u>   All right reserved.</p>
                                <p style={{color:'#6E7684'}}>Designed By <u><span className="text-light">Omkar Seshadri </span></u> Distributed By <u><span className="text-light">ThemeWagon</span></u> </p>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer;