
const express = require('express');

const app = express();

const port = 3000;

const db = require('./db/db');

const router = require('./router.js');

const cors = require('cors');


//Middlewares

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);


//Conexión a base de datos

db();


//Levantar servidor
app.listen(port, ()=> {console.log("Servidor levantado en el puerto ", port)});

