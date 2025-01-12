import { useEffect, useState } from 'react';
import './Styles/Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const [showPopup, setShowPopup] = useState(false);
    
      useEffect(() => {
        // Trigger popup after 3 seconds
        const timer = setTimeout(() => {
          setShowPopup(true);
        }, 3000);
    
        return () => clearTimeout(timer); 
      }, []);
    
      const closePopup = () => {
        setShowPopup(false);
      };
    return (
        <>


            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-12  ">
                        <div className="row">
                            <div style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(./assets/car-home2.jpeg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '90vh', backgroundAttachment: 'scroll' }}>

                                <marquee behavior="" direction="" className="mt-2">Get Upto <span style={{ color: '#ea001e', textTransform: 'uppercase' }}>15% Offer </span>  On Rental Car <span style={{ color: '#ea001e' }}>Bookings Open Now </span> . . . </marquee>
                                <div className="col-md-12 home-car m-auto  " style={{ textAlign: 'left' }}>

                                    <h1 className='mt-3 mx-5' >  Start <br /> Your <br /> <span>Journey</span>  Now !</h1>

                                    <NavLink to={'/login'}> <button className='btn btn-lg px-4 mx-5 mt-3 '>Reserve Here . . .</button></NavLink>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {showPopup && (
        <div
          className="position-fixed top-50 start-50 translate-middle bg-light border shadow-lg p-4 rounded"
          style={{ zIndex: 1050, width: "500px" }}
        >
          <h5 className="text-center">Special Offer</h5>
          <p className="text-center">
            Get 20% off on your first rental booking!
          </p>
          <button
            className="btn btn-danger w-100"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      )}


        </>
    )
}

export default Home;