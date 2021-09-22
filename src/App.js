import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromResponse} from "./spotify"

function App() {
  


//run code based on given condition
useEffect(() => {
  const hash =getTokenFromResponse()
   window.location.hash ="";

   const token=hash.access_token;

  console.log('I HAVE A TOKEN >>>',token);
},[])

  return (
    <div className="app">
      

      {/* spotify logo */}
      {/* login with spotify */}
      <Login />
    </div>
  );
}

export default App;
