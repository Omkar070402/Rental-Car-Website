import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Blog from './Blog';
import Customer_form from './Customer_form';
import Customer_data from './Customer_data';
import Customer_edit from './Customer_edit';
import Login from './Login';
import Signup from './Sigup';


const App=()=>{
  return(

    <Router>

   <Routes>

    <Route path='/' element={<Layout/>}>

    <Route index element={<Home/>}></Route>
    <Route path='/about' element={<About/>}>About</Route>
    <Route path='/service' element={<Service/>}>Service</Route>
    <Route path='/blog' element={<Blog/>}>Blog</Route>
    <Route path='/contact' element={<Contact/>}>Contact</Route>

    <Route path='/customer_form' element={<Customer_form/>}></Route>
    <Route path='/customer_data' element={<Customer_data/>}></Route>
    <Route path='/customer_edit/:id' element={<Customer_edit/>}></Route>
        
     <Route path='/login' element={<Login/>}></Route>   
     <Route path='/signup' element={<Signup/>}></Route>

    </Route>
     

   </Routes>


    </Router>
    
  )
}

export default App;