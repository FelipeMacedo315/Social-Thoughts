const tableThoughts = require("../models/thoughts");

function thoughts(req, res) {
  res.render("thoughts", {sessionId: req.session.userId});
}
async function createThoughts(req, res) {
  if (req.body.thought.length > 0) {
    const thoughtForm = req.body.thought;
    tableThoughts.create({userThought: thoughtForm, userId: req.session.userId}).then(() => {
  res.redirect(`/dashboard/${req.session.userId}`)
    });
  } else {
    res.redirect("/thoughts");
  }
}

module.exports = {thoughts, createThoughts};
