import React, { useState } from 'react';

import './App.css';


export default function Desc({ match, history }) {
    const [users, setUsers] = useState([]); 
    console.log(match.params.id);
 
    return (
        <div className="App">
          <header className="App-header">
    <h1>Smarts Dashboard{match.params.id}</h1>
            <ul>
              {users.map(user => (
                <li key={user._id}>
                  <img src={user.pictures[0].url} alt="" />
                  <footer>
                    <strong>Name: {user.name.first + " " + user.name.last}</strong>
                    <p>E-mail: {user.email}</p>
                    <p>Company: {user.company}</p>
                    <p>Age: {user.age}</p>
                    <p>Burget: {user.budget}</p>
                  </footer>
                </li>
              ))}
            </ul>
            <div className="buttons3">
              <button type="button" onClick={() => history.push('/')}>Voltar</button>
            </div>
          </header>
        </div>
    );
}