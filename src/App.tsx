import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from  '../src/ui/pages/Product'

function App() {
  return (
    <div className='bg-[#ffffff]'>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Product />}/>
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
