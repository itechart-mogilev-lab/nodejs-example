const router = require("express").Router();
const { version } = require("../package.json");

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "API",
    data: {
      version: `${version}`
    }
  });
});

router.use("/account", require("./api/account").router);
router.use("/orders", require("./api/orders").router);

module.exports = router;
