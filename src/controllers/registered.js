const tableUsers = require("../models/users");

async function registeredPost(req, res) {
  const {nome, email, password} = req.body;
  const checkedUser = await tableUsers.findAll({where: {email: email}});
  if (checkedUser.length > 0) {
    res.render("registered", {msg: "Este email já esta em cadastrado"});
  } else {
    const userCreate = await tableUsers.create({
      nome: nome,
      email: email,
      password: password,
    }).then;
    res.render("thoughts");
  }
}

function registeredGet(req, res) {
  res.render("registered");
}

module.exports = {registeredGet, registeredPost};
