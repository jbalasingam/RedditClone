var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var crudditDB = sequelize.define('crudditDB', {
        test1: DataTypes.STRING,
        test2: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        float1: DataTypes.FLOAT,
        float2: DataTypes.FLOAT

})
    return crudditDB;
}


