
const tableThoughts = require("../models/thoughts");

async function updateThoughtsPost(req, res) {
  const idThoughtUpdate = req.params.idThoughtAtualized;

  const whereThoughtUpdate = await tableThoughts.findOne({
    where: {
      id: idThoughtUpdate,
    },
  });
  const thoughtAtualized = req.body.thoughtAtualized;
  whereThoughtUpdate.update({userThought: thoughtAtualized});

  res.redirect(`/dashboard/${req.session.userId}`);
}

async function updateThoughtsGet(req, res) {
  const idThoughtUpdate = req.params.idThought;

  const whereThoughtUpdate = await tableThoughts.findOne({
    where: {
      id: idThoughtUpdate,
    },
    raw: true,
  });
  res.render("updateThoughts", {thought: whereThoughtUpdate, sessionId: req.session.userId});

}

module.exports = {updateThoughtsPost, updateThoughtsGet};
