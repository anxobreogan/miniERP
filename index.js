'use strict';

const express = require ('express');
const app = express();

//Conexión a Mongo.
require('dotenv').config();
const httpServerConfig= require('./config/http-server-config');
const mongoPool= require('./databases/mongo-pool');
const webServer= require('./webserver/index');

(async function initApp(){
    try{
        await mongoPool.connect();
        await webServer.listen(httpServerConfig.port);
        console.log(`server running at : ${httpServerConfig.port}`);
    } catch(e){

        console.error(e);
        process.exit(1);

    }
}());


// Servidor web en Node.
// app.listen(3000,()=>{
//     console.log('running on port 3000')
// });








