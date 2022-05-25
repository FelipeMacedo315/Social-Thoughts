const tableThoughts = require("../models/thoughts");
async function dashboard(req, res) {
  const usersThoughts = await tableThoughts.findAll({
    where: {
      userId: req.params.id,
    },
    raw: true,
  });
  
  res.render("dashboard", {
    sessionId: req.session.userId,
    usersData: usersThoughts.map((item) => {
      return {thought: item.userThought, idThought: item.id};
    }),
  });
}

module.exports = {dashboard};
