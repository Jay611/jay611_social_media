const router = require("express").Router();
const postCtrl = require("../controllers/postCtrl");
const auth = require("../middleware/auth");

router
  .route("/post")
  .post(auth, postCtrl.createPost)
  .get(auth, postCtrl.getPosts);

router.route('/post/:id').patch(auth, postCtrl.updatePost)

module.exports = router;
