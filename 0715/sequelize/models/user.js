const { DataTypes } = require('sequelize');

const user = (seq) => {
    return seq.define('user', {
        //컬럼 정의
        id : {
            type : DataTypes.INTEGER,
            allowNull : false, //not null
            primaryKey : true,
            autoIncrement : true,
        },
        userid : {
            type : DataTypes.STRING(20),
            allowNull : false,
        },
        name : {
            type : DataTypes.STRING(10),
            allowNull : false,
        },
        pw : {
            type : DataTypes.STRING(20),
            allowNull : false,
        }
    });
};

module.exports =  user;