
import React from "react";
import Home from "./Pages/Home";
import './App.css'
import DetailsPage from "./Pages/DetailsPage";
import {Routes, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/details" element={<DetailsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
