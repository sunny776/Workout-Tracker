const router = require("express").Router();

const apiRoutes = require("./api");
const viewRoute = require("./view");

router.use("/api", apiRoutes);
router.use("/", viewRoute);

module.exports = router;
