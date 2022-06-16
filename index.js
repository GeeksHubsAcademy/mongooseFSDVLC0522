
const express = require('express');

const app = express();

const port = 3000;

const db = require('./db/db');

const router = require('./router.js');

const cors = require('cors');

//Configuro cors
let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//Middlewares

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);


//Conexión a base de datos

db();


//Levantar servidor
app.listen(port, ()=> {console.log("Servidor levantado en el puerto ", port)});

