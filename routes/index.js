const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes");
const apiRoutes = require("./apiRoutes");

router.use("/",apiRoutes);
router.use("/",htmlRoutes);

module.exports = router;