'use stric';
const bcrypt= require('bcrypt');
const Employee= require('../models/employee');

//con esto ya tengo el modelo cargado.

function home(req,res){
    
    res.status(200).send('Todo ok en home');
  }

function prueba (req,res){
    console.log(req.body);
    res.status(200).send('Todo ok en prueba');
};

function saveUser(req,res){
    const params=req.body;
    // console.log(params);
    let employee= new Employee();

    // Certificamos que se están pasando todos los datos que necesitamos como mínimo.
    if (params.name && params.surname1 && params.surname2 && params.DNI && params.personal_phone && params.NSS && params.created_at && params.category && params.state && params.role && params.password){
        employee.name= params.name;
        employee.surname1= params.surname1;
        employee.surname2= params.surname2;
        employee.DNI= params.DNI;
        employee.personal_phone= params.personal_phone;
        employee.NSS= params.NSS;
        employee.created_at= params.created_at;
        employee.category= params.category;
        employee.state= params.state;
        employee.work_email= params.work_email;
        employee.work_center= params.work_center;
        employee.role= params.role;
        employee.password= params.password;

            Employee.find({$or: [
                {DNI:employee.DNI},
                {NSS:employee.NSS}
            ]}).exec((err,employees)=>{
                if (err) return res.status(500).send({message:'Error en la petición de usuarios'});

                if (employees && employees.length>=1){
                    return res.status(200).send({message:'El empleado ya existe'});
                }else{
                    //Hasheamos la password y stored-amos los datos del empelado.
                    bcrypt.hash(params.password,null,(err,hash)=>{
                        employee.password=hash;
        
        
        
                     employee.save((err,employeeStored)=>{
                        if (err){
                            return res.status(500).send({message:'Empleado no guardado'});
                        } 
        
                        //Grabamos los datos del empleado.
                        if(employeeStored){
                            res.status(200).send({employee:employeeStored});
                        } else {
        
        
                            res.status(404).send({message:'No se registra el usuario'});
                        }
                    });
                });

            }
        });

        
          
        

    } else{
       res.status(403).send('Te faltan campos');
    };
    
}
//Exporto las funciones fuera del fichero.
module.exports= {
      home,
      prueba,
      saveUser
 };