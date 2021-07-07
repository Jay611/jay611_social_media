const router = require("express").Router();
const postCtrl = require("../controllers/postCtrl");
const auth = require("../middleware/auth");

router
  .route("/post")
  .post(auth, postCtrl.createPost)
  .get(auth, postCtrl.getPosts);

router
  .route("/post/:id")
  .patch(auth, postCtrl.updatePost)
  .get(auth, postCtrl.getPost);

router.patch("/post/:id/like", auth, postCtrl.likePost);

router.patch("/post/:id/unlike", auth, postCtrl.unLikePost);

router.get("/user_post/:id", auth, postCtrl.getUserPosts);

module.exports = router;
