import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Bage1 from './Bage1';
import Bage2 from './Bage2';

function App() {

  return (
    <>
   <BrowserRouter>
   
   <Routes>
      <Route   path="/" element={<Bage1 />}/>
      <Route   path="/Bage2" element={<Bage2 />}/>
      
      </Routes>
  
   </BrowserRouter>

    </>
  )
}

export default App;
