const tableUsers = require("../models/users");

function loginGet(req, res) {
  res.render("login");
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
    res.render('login',{msgError:'Email ou senha incorretos'})
  } else {
    res.render('thoughts')
  }

}
module.exports = {loginGet, loginPost};
