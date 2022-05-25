const tableUsers = require("../models/users");

function loginGet(req, res) {
  req.session.userId = false
  res.render("login",{sessionId:req.session.userId});
}

async function loginPost(req, res) {
  const {email, password} = req.body;
  const checkedUser = await tableUsers.findOne({
    where: {
      email: email,
      password: password,
    },
  });

  if (checkedUser === null) {
    res.render("login", {msgError: "Email ou senha incorretos"});
  } else {
    req.session.userId = checkedUser.id
    console.log(checkedUser.id)
    req.session.save(() => res.redirect("/thoughts"));
  }
}

module.exports = {loginGet, loginPost};
