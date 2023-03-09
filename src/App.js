import React, { useState, useEffect } from 'react';
import Header from "./component/Header";
import SerchButoon from "./component/SearchButton";
import './App.css';


function App() {

  return (
    <>
    <div className="container">
      <Header/>
      <SerchButoon/>
    </div>
     </>
  );
}

export default App;