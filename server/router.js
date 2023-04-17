const express = require("express");
const router= express.Router();
const {getMessage} = require("./controller");


router.route("/").post(getMessage);


module.exports = router;