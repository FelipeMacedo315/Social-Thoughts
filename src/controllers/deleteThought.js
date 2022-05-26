
const tableThoughts = require("../models/thoughts");

function deleteThought(req, res) {
 const idDeleteThought = req.params.idThought
// res.send(idDeleteThought.toString())
tableThoughts.destroy({where:{
  id:idDeleteThought
}})

res.redirect(`/dashboard/${req.session.userId}`)
}

module.exports = deleteThought;
