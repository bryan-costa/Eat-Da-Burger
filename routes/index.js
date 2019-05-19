const db = require("../config");

module.exports = app => {
  // Get all burgers
  app.get("/burger", (req, res) => {
    db.query('SELECT * FROM burgers', (e, burgers) => {
      if (e) throw e
      res.render("index", { burgers })
    })
  });
  // Add a new burger
  app.post("/burger", (req, res) => {
    db.query('INSERT INTO burgers SET ?', req.body, e => {
      if (e) throw e
      res.sendStatus(200)
    })
  });
  // Update a burger
  app.put("/burger/:id", (req, res) => {
    db.query('ALTER TABLE burgers', (e, burgers) => {
      if (e) throw e
      res.render("index", { burgers })
    })
  });
};