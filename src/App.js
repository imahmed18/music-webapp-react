
import './App.css';
import React, {useEffect, useState} from 'react';
import Login from './Login';
import {getTokenfromUrl} from './spotify'
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenfromUrl();
    window.location.hash="";
    const _token=hash.access_token;

    if(_token)
    {
      dispatch({
        type: "SET_TOKEN",
        token:_token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {

        dispatch({
          type: "SET_USER",
          user:user,
        })
      })

      spotify.getUserPlaylists("31ydvvuvjmottyrpjfknhh66sewm").then((playlists)=>{

        console.log("loglgog", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists:playlists,
        })
      });

      spotify.getPlaylist()

      
    }

  }, []);

  console.log("this is playlist",playlists);

  return (
    <div className="App">{token? <Player spotify={spotify}/> : <Login /> }</div>
  );
}

export default App;
