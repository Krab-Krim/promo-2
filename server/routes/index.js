const express = require("express");
const router = express.Router({mergeParams: true});

router.use("/users", require("./user.routes"));
router.use("/promo", require("./promo.routes"));

module.exports = router;
