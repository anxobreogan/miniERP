'use strict';

const Joi= require('Joi');
const Employee= require('../models/employee');



// function insertEmployee(req,res,next){

//     const params= req.body;   

//     // console.log(params);

//     Employee.find({DNI:params.DNI},function (err,employee){
//         if(err){
//            return res.status(400).send({message:'Fracaso'});
//         } else {
//             if(employee){
//                 res.status(200).send(employee);
//             }else{
//                 res.status(403).send({message:'El empleado no existe'})
//             }
//         } 
//     });

// }

function validateSchema(payload){

    const schema= {
        personal_email:Joi.string().email({minDomainAtoms:2}).required(),
        password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    };
    return Joi.validate(payload,schema);
}

async function insertEmployee(req,res,next){
    const params= req.body;  
    // console.log(params);
    const {DNI,personal_email,password}=params;
    const accountData= {personal_email,password};

    console.log(accountData);
    
    
    
    try{
        const existEmployee=await Employee.findOne({DNI:DNI});
        
        try{
            if(existEmployee){

               return res.status(400).send({message:'El empleado ya existe'});
            } else {
                
                try{
                    await validateSchema(accountData);
                    
                    // res.status(200).send({message:'Inserta usuario'});
                    console.log(accountData);
                }catch(e){
                    console.log(e, ' holaaaaaaaaaa')
                    res.status(400).send(e);
                }
                
                
            }
        }catch(e){
            res.status(500).send({message:'Error'});
        }        

    } catch(e){
        res.status(500).send(e);
    }

}




module.exports={
    insertEmployee,
}