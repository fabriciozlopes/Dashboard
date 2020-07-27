import React, { useEffect, useState } from 'react';


import './App.css';
import api from './service/api';

function App({ history }) {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    async function loadusers(){
      const response = await api.get('/');
      setUsers(response.data);
    }

    loadusers();
  });
  async function handleli(id) {
    console.log(id);
    var id = JSON.stringify(id)
    history.push(`/desc/${id}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Smarts Dashboard</h1>
        <div className="buttons">
          <button type="button">Menor Burget</button>
          <button type="button">Maior Burget</button>
          <button type="button">A - Z</button>
          <button type="button">Z - A</button>
        </div>
        <ul>
          {users.map(user => (
            <li key={user._id} type="button" onClick={() => handleli(user)}>
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
        <div className="buttons2">
          <button type="button">Anterior</button>
          <button type="button">Próximo</button>
        </div>
      </header>
    </div>
  );
}

export default App;
