



const UsersController = {};
const authConfig = require('../config/auth');
const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const useful = require('../useful');
// const jwt = require('jsonwebtoken');

UsersController.getUsers = async (req, res) => {


    if(checkError === true){
        res.send("Ha ocurrido un error");
    }

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

    let checkError = useful.validate("email",email);
  
    if(checkError === true){
        res.send("Ha habido un error ingresando los datos");
    }
    
    let arrayCampos = [name,age,email];

    for(let campo of arrayCampos){
        if(campo === ""){
            res.send("No has rellenado todos los campos");
        }
    }

        //Una vez hemos hecho la comprobación de errores, procedemos a la ejecución de la query con el ORM.

        try {

            await User.findOne({

                email : email

            }).then(usuarioEncontrado =>{

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

UsersController.modifyUser = async (req, res) => {
    
}

UsersController.deleteUser = async (req, res) => {


}


module.exports = UsersController;