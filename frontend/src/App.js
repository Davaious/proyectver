/* eslint-disable no-unused-vars */
import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import axios from 'axios';
const App = () => {
  return (
    <div>
      <h1>Bienvenido a la DApp</h1>
      <Register />
      <Login />
    </div>
  );
};

export default App;
