import './App.css';
import Form from './Form'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User'
import * as yup from 'yup';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data)
        console.log('GET users', res.data.data)
      }).catch(err =>
        console.error(err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Onboarding</h1>
      </header>
     <Form setUsers={setUsers} users={users}/>
     <h3>Current Users</h3>
     {
       users.map(user => (
       <User key={user.id} user={user} /> ))
    }
    </div>
  );
}

export default App;
