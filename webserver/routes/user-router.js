'use strict';

const express= require('express');

const UserController= require('../controllers/user');

//Cargamos el método Router para tener, get,post, delete
const api= express.Router();
//Las rutas que queremos probar.
api.get('/home',UserController.home);
api.get('/pruebas', UserController.prueba);
api.post('/register', UserController.saveUser);
module.exports= api;
