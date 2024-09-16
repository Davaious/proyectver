// models/User.js
const pool = require('../config/db');

const createUser = async (email, passwordHash) => {
  const result = await pool.query(
    'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
    [email, passwordHash]
  );
  return result.rows[0];
};

//define el esquema de usuario que se utilizará para el registro y login.
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

module.exports = (User);



module.exports = { createUser };
