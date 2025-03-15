const express = require('express');
const app = express();
require('dotenv').config();
const routerClient = require('./router/index.route');
const database = require('./config/database');
const cookieParser = require('cookie-parser')
const cors = require('cors');
require('dotenv').config;
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: `${process.env.URL_VITE}`, credentials: true }));

routerClient(app);
database.connect();
app.listen(process.env.PORT, () => console.log('Server running on port 3000'));