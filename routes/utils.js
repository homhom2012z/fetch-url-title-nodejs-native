const express = require("express");
const router = express.Router();

const { title } = require("../controllers/utils.js");

router.get("/title", title);

module.exports = router;
