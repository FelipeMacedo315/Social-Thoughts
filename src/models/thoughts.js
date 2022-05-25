const {DataTypes} = require("sequelize");
const database = require("../db/conn");

const thoughtsUser = database.define("thoughtsUser", {
  userThought: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId:{
    type:DataTypes.INTEGER
  }

});
thoughtsUser.sync();

module.exports = thoughtsUser;
