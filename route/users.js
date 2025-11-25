// routes/users.js
const express = require("express");
const router = express.Router();

// GET /api/users/test
router.get("/test", (req, res) => {
  res.json({ message: "Users route works" });
});

module.exports = router;
