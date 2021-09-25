import React, { useEffect,useState } from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromResponse} from "./spotify"
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import { useStateValue } from "./StateProvider";


const spotify =new SpotifyWebApi()

function App() {
  
  // const[token,setToken]=useState(null)

  // const [{  user , token},dispatch]=useDataLayerValue();
  const [{ token }, dispatch] = useStateValue();

//run code based on given condition
useEffect(() => {
  const hash =getTokenFromResponse()
   window.location.hash ="";

   const _token=hash.access_token;
   if(_token){

    dispatch({
      type:"SET_TOKEN",
      token: _token,
    })

    //  setToken(_token)
     

     spotify.setAccessToken(_token)

     spotify.getMe().then(user => {
       

       dispatch({
         type:'SET_USER',
         user : user,
       })
     });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spotify.getPlaylist('440nMY0PtSXPvXRlyye7oA').then(response =>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })
   }

  // console.log('I HAVE A TOKEN >>>',token);
},[])

// console.log("person", user);
// console.log("alian", token);

  return (
    <div className="app">
      { token ? <Player spotify={spotify} /> : (<Login />)}
      {/* {!token && <Login />}
      {token && <Player spotify={spotify} />} */}
      
      {/* spotify logo */}
      {/* login with spotify */}
    
    </div>
  );
}

export default App;
