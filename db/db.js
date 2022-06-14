const db = () => {
    const mongoose = require('mongoose');
    // const clave = process.env.DB_CLAVE;
    // const database = process.env.DB_DATABASE;
    // const usuario = process.env.DB_USUARIO;
    // const cluster = process.env.DB_CLUSTER;

    //Esta url, es el string que nos genera atlas con el cual seremos capaces de conectarnos a la base de datos
    const url = `mongodb+srv://fsdVLC0522:1234@dbhive.cu5o7.mongodb.net/geekLove?retryWrites=true&w=majority`;

    mongoose.connect(url, {
        useNewUrlPArser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('Conexion a database correcta')).catch(error => console.log('Alguun error ha ocurido', error))
}

module.exports = db;