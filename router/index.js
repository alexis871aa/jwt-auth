const Router = require("express").Router;

const router = new Router({ mergeParams: true });

router.use("/users", require("./user"));

module.exports = router;
