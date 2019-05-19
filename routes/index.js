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
    db.query('INSERT INTO burgers VALUES ?', (e, burgers) => {
    if (e) throw e
      res.render("index", { burgers })
    })
  });
  // Update a burger
  app.put("/burger/:id", (req, res) => {
    db.query('ALTER TABLE burgers', (e, burgers) => {
    if (e) throw e
      res.render("index", { burgers })
    })
  });
  // Delete a burger
  app.delete("/burger/:id", (req, res) => {
    db.query('DELETE FROM burgers WHERE ?', { id: req.params.id }, (e, burgers) => {
    if (e) throw e
      res.render("index", { burgers })
    })
  });
};