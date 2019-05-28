'use strict';
const mongoose= require ('mongoose');

mongoose.promise= Promise;

const mongoUri= 'mongodb://localhost:27017/employee';

async function openConnection(){

    const conn= await mongoose.connect(mongoUri,{useNewUrlParser: true})
    console.log('Mongodb is conected')
    return conn;
}

async function disconnect (){
    mongoose.connection.close();
}

module.exports={
    connect:openConnection,disconnect
}