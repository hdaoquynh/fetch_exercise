import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
 const [data, setData] = useState([]);

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
        setData(response)
      })
      .catch(e => {
        alert("An error occured while fetching data");
      })
});

  return (
    <div className="App">
      <table> 
        <thead>
          <tr>
            <th>id</th>
            <th>listId</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(d => {
              if(d.name !== "" && d.name !== null ){
                return(
                  <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.listId}</td>
                    <td>{d.name}</td>
                  </tr>
                )
              
              
            }
          })
          }
      </tbody>
      </table>
    </div>
  );
}

export default App;