const db = require("../config");

module.exports = app => {
  // your routes here...
  app.get("/", (req, res) => res.render("index"));
};
