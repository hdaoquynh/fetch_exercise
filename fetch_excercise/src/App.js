import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function retrieveData(){
  fetch("https://fetch-hiring.s3.amazonaws.com/hiring.json", {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.table(response)
    })
}

function App() {
  retrieveData();
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
