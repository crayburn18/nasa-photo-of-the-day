import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [nasaPhoto, setNasaPhoto] = useState([]);

  useEffect(()=>{
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((res) => {
        setNasaPhoto(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div >
      <div>
        <img src={nasaPhoto.hdurl} alt='Space'></img>
      </div>
    </div>
  );
}

export default App;
