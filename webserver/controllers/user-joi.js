'use strict';


const mongoose= require('mongoose');
const Joi = require( 'Joi');


// function checkEmail(req,res,next){
//     const params= req.body;
//     //console.log(params);
//     //res.status(200).send({message:'Hola amapola'});

//     const {personal_email}=params;

//     const schema= Joi.object().keys({
//         personal_email:Joi.string().trim().email({minDomainsAtoms: 2}).required()
//     });
//     Joi.validate(personal_email,schema,(err,result)=>{
//         if(err){
//             //res.status(500).send('an error has occurred');

//             console.log('algo ha pasado')
//         }
//         console.log(result);
//         //res.status(200).send('succesfully')
//     })
// }


async function validateSchema(payload){
    const schema={
        personal_email: Joi.string().email({minDomainAtoms: 2}).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        role:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    };

    return Joi.validate(payload, schema);
}

async function checkEmail(req, res, next) {
    const accountData = { ...req.body };
    console.log(accountData);
    
    if(personal_email){
        res.status(403).send({message:'User exits!!!'});
    }
  
    /**
     * Validate if user data is valid to create an account
     * in other case, generate a 400 Bad Reqeust error
     */
    try {
      await validateSchema(accountData);
    } catch (e) {
      // Create validation error
      return res.status(400).send(e);
    }
  
    const {
      personal_email,
      password,
    } = accountData;
  
    try {
      /**
       * Create the user and send response
       */
    //   const uuid = await insertUserIntoDatabase(email, password);
    //   res.status(204).json();
        res.status(200).send('todo ok');
      /**
       * We are going to creaate minimum structure in mongodb
       */
    //   await createUserProfile(uuid);
  
      /**
       * Generate verification code and send email
       */
      try {
        // const verificationCode = await addVerificationCode(uuid);
        // await sendEmailRegistration(email, verificationCode);
      } catch (e) {
        console.error('Sengrid error', e);
      }
    } catch (e) {
      // create error
      next(e);
    }
  
    return 9;
  }

  module.exports={checkEmail};
  