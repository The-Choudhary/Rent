
import Login from './rent/login';
import Layout from './rent/home.js';
import Booking from './rent/booking';
import Bookinglist from './rent/bookinglist.js';
import Contactus from './rent/contactus.js';
import Photog from './rent/photog.js';
import Rent from './rent/rent';
import About from './rent/aboutus';
import Form from './com/form'
import Admin from './Admin/admin'
import Addcat from './Admin/addcat';
import Viewcat from './Admin/viewcat';
import Addtable from './Admin/addtable';
import Viewtable from './Admin/viewtable';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/multi-concept-house appartment" element={<Bookinglist/>} />
        <Route path="/contact-us" element={<Contactus/>} />
        <Route path="/photo-gallery" element={<Photog/>} />
        <Route path="/rent" element={<Rent/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path='/form' element={<Form/>}/>
        <Route path='/form/admin' element={<Admin/>}/>
        <Route path="/form/admin/add-catagories" element={<Addcat/>} />
        <Route path="/form/admin/view-catagories" element={<Viewcat/>} />
        <Route path="/form/admin/add-table" element={<Addtable/>} />
        <Route path="/form/admin/view-table" element={<Viewtable/>} />
        
        </Routes>
    </BrowserRouter>
  
    
  )
}

export default App;
