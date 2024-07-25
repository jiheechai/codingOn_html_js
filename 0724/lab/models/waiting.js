const {DataTypes} = require('sequelize');

const waitingModel = (sequelize) => {
    const waiting = sequelize.define(
        'waiting',
        {
            id : {
                type : DataTypes.INTEGER,
                allowNull: false, //not null
                primaryKey : true,
                autoIncrement : true,
            },
            sts : {
                type : DataTypes.STRING(20),
                allowNull : false,
            },
            waitingStart : {
                type : DataTypes.STRING,
                allowNull : false,
            },
            waitingEnd : {
                type : DataTypes.STRING,
                allowNull : false,
            },
            clientId : {
                type: DataTypes.INTEGER,
                references: {
                    model: 'clients',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            }

        }
    );
    return waiting;
};

module.exports = waitingModel;