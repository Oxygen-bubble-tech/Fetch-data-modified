import React, { useState, useEffect } from 'react';
import UseFetch from './useFetch';
import Header from './Header';
import './mainBodyStyle.css';

function App() {
           
    return(
      <>
      <Header />
      <div className='main-container'>
      <UseFetch />
      </div>
      </>
    )
}

export default App
