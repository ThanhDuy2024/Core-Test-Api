const express = require('express');
const app = express();
require('dotenv').config();
const routerClient = require('./router/index.route');
const database = require('./config/database');
const cookieParser = require('cookie-parser')
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

routerClient(app);
database.connect();
app.listen(process.env.PORT, () => console.log('Server running on port 3000'));