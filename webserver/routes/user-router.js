'use strict';

const express= require('express');

const UserController= require('../controllers/user');
const UserLogin= require('../controllers/login');
const Check= require('../controllers/user-joi');

const User2=require('../controllers/user-joi2');

//Cargamos el método Router para tener, get,post, delete
const api= express.Router();
//Las rutas que queremos probar.

api.post('/register', UserController.saveUser);
api.post('/login',UserLogin.userLogin);
api.post('/search',UserLogin.searchUser);
api.post('/searchdos',Check.checkEmail);
api.post('/search3',User2.insertEmployee);

module.exports= api;
