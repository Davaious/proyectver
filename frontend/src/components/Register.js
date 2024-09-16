import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // Limpiar el error previo
    setSuccess(''); // Limpiar el mensaje de éxito previo

    // Validar que los campos no estén vacíos
    if (!email || !password) {
      setError('Por favor completa todos los campos.');
      return;
    }

    try {
      setSuccess('Usuario registrado con éxito');
    } catch (error) {
      console.error('Error en el registro:', error.response ? error.response.data : error.message);
      setError('Error en el registro. Inténtalo de nuevo.');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Registrar</button>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
};

export default Register;
