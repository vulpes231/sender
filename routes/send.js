const { sendMessage } = require("../handlers/messageHandler");

const { Router } = require("express");
const router = Router();
router.route("/").post(sendMessage);
module.exports = router;
