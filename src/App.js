import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './request.js';

function App() {
  return (
    <div className="App">
      <h1>Hey Clever Fredy! Lets' build this Netflix clone Front-end! 🚀</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <h1> Row title="Trending Now" fetchUrl={requests.fetchTrending} </h1>
      
      
    </div>
  );
}

export default App;
