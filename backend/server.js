// server.js
//Rutas conectadas al servidor express
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const userRoutes = require('./routes/userRoutes');
const nftRoutes = require('./routes/nftRoutes');

const app = express();

app.use(cors());
//Middleware para procesar datos JSON

app.use(express.json());
// Conectar las rutas de usuario
app.use('/api/users', userRoutes);
app.use('/api/nfts', nftRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
