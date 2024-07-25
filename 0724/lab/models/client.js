const {DataTypes} = require('sequelize');

const clientModel = (sequelize) => {
    const client = sequelize.define(
        'client',
        {
            id : {
                type : DataTypes.INTEGER,
                allowNull: false, //not null
                primaryKey : true,
                autoIncrement : true,
            },
            userName : {
                type : DataTypes.STRING(10),
                allowNull : false,
            },
            email : {
                type : DataTypes.STRING(30),
                allowNull : false,
            }
        }
    );
    return client;
};

module.exports = clientModel;