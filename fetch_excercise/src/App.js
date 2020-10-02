import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 let data;

  useEffect(() =>{
    const proxyURL = "https://cors-anywhere.herokuapp.com/";
    const url = "https://fetch-hiring.s3.amazonaws.com/hiring.json";
    fetch(proxyURL+url, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'include' 
        }
      })
      .then(res => {
        return res.json()
      })
      .then(response => {
        console.table(response)
        data = response
      })
      .catch(e => {
        alert("An error occured while fetching data");
      })
});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
