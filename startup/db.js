const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function () { 
    const db = config.get('db');
    mongoose.connect(db)
    .then(()=> {
        winston.info(`Connected to ${db}...`);
    });// catch in winston, by unhandled, and quit with non-zero signal
}