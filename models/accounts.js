'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {

    static associate(models) {
    }
  };
  Accounts.init({
    AccountID: DataTypes.INTEGER,
    AccountName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Accounts',
  });
  return Accounts;
};