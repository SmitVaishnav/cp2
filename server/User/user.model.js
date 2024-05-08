const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    {
      id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
      // fullname: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // phoneNumber: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
    },
    {
      tableName: 'users',
      timestamps: false,
    }
  );


  return User;
};