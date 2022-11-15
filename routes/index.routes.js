const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/////////////////////////////////////////

// Creating First Middleware
// router.use("/", (req, res, next) => {
//   console.log("Hello I'm first");
//   next();
// });

// // // Creating second middleware
// router.get("/", (req, res, next) => {
//   console.log("Get Request, I'm second");
// });

module.exports = router;
