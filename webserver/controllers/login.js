'use strict';

const bcrypt= require('bcrypt');
const mongoose= require('mongoose');
const Employee= require('../models/employee');

function searchUser(req,res,next){
//Esto lo hice para sacar un campo y poder extrapolarlo a lo que necesito del password, que 

    const params=req.body;

    const name=params.name;
    
    Employee.find({ name: name},(err,user)=>{

        if(err){
            res.status(500).send({message:'error'})
        } else if (user){
            const userParams=user;
            const {DNI}=userParams;
            res.status(200).send(user);
            const userParams2=(userParams[0]);
            console.log(userParams2.DNI);
            console.log('Destructuring objetos'+ DNI);

        }

    });
};
 

function userLogin(req,res,next){
// Declaramos password y email, para buscar mediante findOne() en la BDD
    let params= req.body;
    const password= params.password;
    const email=params.work_email;    
    console.log(email);   

    Employee.findOne({work_email:email},(err,employee)=>{        

        if(err){
           if(err) return res.status(500).send({message:'Fallo '}) 
        }

        if(employee){            
            //Para desencriptar password: bcrypt compare( password que va por el body, password de la BBDD, callback)
            bcrypt.compare(password,employee.password,(err,check)=>{
                console.log(employee.password);
                if(check){                   
                    return res.status(200).send({message:'Usuario identificado con éxito'});
                }else{
                    return res.status(404).send({message:'Identifación inválida'});
                    
                };                
            });
        };       
        
    });
    // console.log(params);
    // res.status(200).send({params});

}

module.exports= {userLogin,searchUser};