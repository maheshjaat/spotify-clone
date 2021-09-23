import React, { useEffect,useState } from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromResponse} from "./spotify"
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';

const spotify =new SpotifyWebApi()

function App() {
  
  const[token,setToken]=useState(null)

//run code based on given condition
useEffect(() => {
  const hash =getTokenFromResponse()
   window.location.hash ="";

   const _token=hash.access_token;
   if(_token){
     setToken(_token)

     spotify.setAccessToken(_token)

     spotify.getMe().then(user => {
       console.log("person", user);
     })
   }

  console.log('I HAVE A TOKEN >>>',token);
},[])

  return (
    <div className="app">
      { token ? <Player/> : (<Login />)}
          
          
          
        
      

      {/* spotify logo */}
      {/* login with spotify */}
      <Login />
    </div>
  );
}

export default App;
