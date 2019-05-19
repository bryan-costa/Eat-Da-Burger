const db = require("../config");

module.exports = app => {
  // your routes here...
  app.get("/burger", (req, res) => res.render("index"));
};