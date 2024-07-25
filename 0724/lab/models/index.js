'use strict';


const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

//모델
db.Client = require('./client')(sequelize);
db.Waiting = require('./waiting')(sequelize);

//1(client):다(waiting)
db.Client.hasMany(db.Waiting, {foreignkey : 'clientId', onDelete : 'CASCADE'});
db.Waiting.belongsTo(db.Client, {foreignkey : 'clientId', onDelete : 'CASCADE'})


db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
