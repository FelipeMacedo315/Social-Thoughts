const { Sequelize } = require("sequelize");
const conn = new Sequelize("toughts", "root", "", {
  dialect: "mysql",
  host: "localhost",
  logging: console.log("Conection is work"),
});


module.exports = conn;
