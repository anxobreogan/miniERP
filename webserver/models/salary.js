'use strict';

const mongoose= require('mongoose');

const Schema= mongoose.Schema;
const salarySchema= Schema({
    money: Number,
    hour: Number,
    created_at: String,
    user: {type: Schema.ObjectId, ref:'Employee'}
})

module.exports= mongoose.model('Salary',salarySchema);