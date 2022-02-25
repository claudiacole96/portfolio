import './app.scss';
import React from "react";
import Navbar from "./components/navbar/Navbar";
import FormSlide from "./components/formSlide/FormSlide";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='mainContainer'>
        <FormSlide />
      </div>
    </div>
  )
}