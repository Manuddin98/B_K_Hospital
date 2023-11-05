
import './App.css';
import Navebar from './Component/Navebar';
import Footer from './Component/Footer';
import Caro1 from './Component/Caro1';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './Component/About';
import Home from './Component/Home';
import Career from './Component/Career';
import Service from './Component/Service';
import Department from './Component/Department';
import Doctor from './Component/Doctor';
import Ambulance from './Component/Ambulance';


function App() {
  return (
  
    <div className="App">
    <BrowserRouter>
     <Navebar/>

     <div>


     <Routes>
          <Route  path='/' element={<Home/>}></Route>
          <Route  path='/About' element={<About/>}></Route>

          <Route  path='/Career' element={<Career/>}></Route>
          <Route  path='/Service' element={<Service/>}></Route>

          <Route  path='/Department' element={<Department/>}></Route>
          <Route  path='/Doctor' element={<Doctor/>}></Route>
          <Route  path='/Ambulance' element={<Ambulance/>}></Route>

          <Route  path='*' element={<Home/>}></Route>

          
        </Routes>





     </div>
     





        <Footer/>

        

        </BrowserRouter>

    </div>
   
  );
}

export default App;
