'use strict';

// Creamos una constante para el modulo de mongoose.

const mongoose= require('mongoose');
// Creo variable para el esquema
const Schema = mongoose.Schema;

const workHolidaysSchema= ({

    spent: Number,
    no_spent: Number,
    // User tiene un tipo ObjectId que hace referencia a Employee.
    user: {type: Schema.ObjectId, ref:'Employee'}

});

module.exports={
    workHolidaysSchema
}