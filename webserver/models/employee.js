'use strict';

const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const EmployeeSchema= Schema ({    
    name : String,
    surname1 : String,
    surname2 : String,
    DNI: String,
    personal_email: String,
    personal_phone: Number,
    NSS: String,
    created_at:String,
    discharge_at:String,
    category: String,
    state: String,
    work_email: String,
    work_phone: String,
    work_center:String,
    role:String,
    password:String,
    // nombre: String,
    // apellido: String,
    // telefono: Number,
    // email: String,
    // password:String
});

module.exports=mongoose.model('Employee',EmployeeSchema);