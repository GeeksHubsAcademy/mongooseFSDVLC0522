



const UsersController = {};
const authConfig = require('../config/auth');
const User = require('../models/User.js');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

UsersController.getUsers = async (req, res) => {

    try {

        await User.find()
            .then(data => {
                res.send(data)
            }).catch(error => {
                res.send(error)
            })

    } catch (error) {

        res.send(error)
    }
}

UsersController.addUser = async (req, res) => {

    //Primer paso, recepcionamos los datos del body en variables

    let name = req.body.name;
    let age = req.body.age;
    let tech = req.body.tech;
    let hobbies = req.body.hobbies;
    let matches = req.body.matches;
    let email = req.body.email;
    //El password lo tenemos encriptado
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

  
    if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email) ) {
            res.send("Introduce un email válido.");
        return;
    };


    if(name === "" || age === "" || tech === "" || hobbies === ""){
        res.send("Los datos no han llegado correctamente");
    }else{

        //Una vez hemos hecho la comprobación de errores, procedemos a la ejecución de la query con el ORM.

        try {

            await User.findOne({

                email : email

            }).then(usuarioEncontrado =>{

                console.log(usuarioEncontrado);

                if(usuarioEncontrado){
                    res.send("E-mail ya existente en la base datos.");
                }else{
                    //Llegamos al paso final, ejecutamos la entrada de datos....
                    User.create({
                        name : name,
                        age : age,
                        tech : tech,
                        hobbies : hobbies,
                        matches : matches,
                        email: email,
                        password : password
                    }).then(usuarioCreado => {
        
                        res.send(`Hola ${usuarioCreado.name}, bienvenido a la red social del amor Geek`);
                    }).catch(error => res.send(error));
                };

            }).catch(error => res.send(error));

        } catch (error) {
            res.send(error);
        }
    }

}

UsersController.modifyUser = async (req, res) => {
    
}

UsersController.deleteUser = async (req, res) => {


}


module.exports = UsersController;