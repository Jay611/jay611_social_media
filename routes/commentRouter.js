const router = require("express").Router();
const commentCtrl = require("../controllers/commentCtrl");
const auth = require("../middleware/auth");

router.route("/comment").post(auth, commentCtrl.createComment);

module.exports = router;
