import React, { useEffect} from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player"
import { useDataLayerValue} from "./DataLayer"

function App() {
  
  const spotify = new SpotifyWebApi()
  const [{user,token}, dispatch] = useDataLayerValue(); //pulling from the datalayer

// run code based on a given condition
//const [token, setToken] = useState(null)

useEffect (() => {
 const hash = getTokenFromUrl ();
 window.location.hash = "";
 const _token = hash.access_token;

 if (_token) {

  dispatch({
    type: "SET_TOKEN",
    token: _token,

  })


   //setToken (_token);

  spotify.setAccessToken(_token);

  spotify.getMe().then((user) => {
   

    dispatch({
      type: "SET_USER",
      user: user,
    });
});


spotify.getUserPlaylists().then((playlists) => {
  dispatch({
    type: "SET_PLAYLISTS",
    playlists: playlists,
  });
});


spotify.getPlaylist('0F9JkqQWh5p4L62claf2xT') .then((response) =>
dispatch({
  type: "SET_DISCOVER_WEEKLY",
  discover_weekly: response,
})
);




}

//console.log('I have a token>>>', token)

// console.log("y", user);
}, []); 
//console.log("y", user);
//console.log("x", token);

  return (
    //BEM
    <div className="app">

      {
        token ? (
          <Player spotify={spotify}/>
        ) : (

    
      <Login />
        )
}
    </div>
  );
}

export default App;
