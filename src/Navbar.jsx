import { NavLink } from "react-router-dom";
import './Styles/Navbar.css';

const Navbar = () => {


  return (

    <div className="container-fluid">

      <div className="row ">
        <div className="col-md-12 ">
          <div className="row p-2 d-flex " id="nav1">

            <div className="col-md-6 d-flex gap-3 mt-2 ">
              <h5><i class="bi bi-geo-alt-fill ms-5"></i> Find a Location</h5>
              <h5><i class="bi bi-telephone-fill mx-2"></i> +01234567890</h5>
              <h5><i class="bi bi-envelope-fill mx-2"></i > urbanite@gmail.com</h5>
            </div>
            <div className="col-md-6 d-flex justify-content-center ">
              <div className="text-center" style={{ height: '50px', width: '50px', border: '1px solid #F2F2F2', borderRadius: '50%', color: 'rgb(234,0,30)', background: '#F2F2F2' }}>
                <h4><i className="fa-brands fa-facebook mt-3"></i></h4>
              </div>
              <div className="text-center mx-2" style={{ height: '50px', width: '50px', border: '1px solid #F2F2F2', borderRadius: '50%', color: 'rgb(234,0,30)', background: '#F2F2F2' }}>
                <h4><i className="fa-brands fa-instagram mt-3 "></i></h4>
              </div>
              <div className="text-center" style={{ height: '50px', width: '50px', border: '1px solid #F2F2F2', borderRadius: '50%', color: 'rgb(234,0,30)', background: '#F2F2F2' }}>
                <h4><i className="fa-brands fa-twitter mt-3"></i></h4>
              </div>
              <div className="text-center mx-2" style={{ height: '50px', width: '50px', border: '1px solid #F2F2F2', borderRadius: '50%', color: 'rgb(234,0,30)', background: '#F2F2F2' }}>
                <h4><i className="fa-brands fa-linkedin mt-3"></i></h4>
              </div>

              <NavLink to={'/login'}> <button className="btn bg-light fw-bold ms-4 mt-2 px-4">Login</button> </NavLink>
              <NavLink to={'/signup'}> <button className="btn bg-light fw-bold ms-4 mt-2 px-4">Sign up</button> </NavLink>
            </div>
          </div>

        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <NavLink className="navbar-brand mx-5" to={'/'}> <h1 style={{ color: '#ea001e', fontVariant: 'small-caps' }}><i class="bi bi-car-front-fill"></i> Urbanite </h1> </NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto fw-900 mb-lg-0 p-2" style={{ fontSize: '16px', fontVariant: 'small-caps' }} >
                  <li className="nav-item mx-2">
                    <NavLink className="nav-link " style={{ color: 'black' }} to={'/'}>Home</NavLink>
                  </li>
                  <li class="nav-item mx-2">
                    <NavLink className="nav-link" style={{ color: 'black' }} to={'/about'}>About</NavLink>
                  </li>
                  <li class="nav-item mx-2">
                    <NavLink className="nav-link" style={{ color: 'black' }} to={'/service'}>Service</NavLink>
                  </li>
                  <li class="nav-item mx-2">
                    <NavLink className="nav-link" style={{ color: 'black' }} to={'/blog'}>Blog</NavLink>
                  </li>

                  <li class="nav-item mx-2">
                    <NavLink className="nav-link" style={{ color: 'black' }} to={'/contact'}>Contact</NavLink>
                  </li>

                  <div className="col-md-8 text-center">
                    <NavLink to={'/login'}><button className="btn btn-sm px-4 mt-1 mx-4 p-2" style={{ 'backgroundColor': '#ea001e', 'color': 'white', 'borderRadius': '20px', fontWeight: 'bold' }}>Get Started</button></NavLink>
                    <NavLink to={'/customer_data'}><button className="btn btn-sm px-4 mt-1 mx-4 p-2" style={{ 'backgroundColor': '#ea001e', 'color': 'white', 'borderRadius': '20px', fontWeight: 'bold' }}>Reservation List</button></NavLink>
                  </div>
                </ul>

              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>


  )
}

export default Navbar;