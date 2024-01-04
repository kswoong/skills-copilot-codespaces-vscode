// Create web  server
// 1. Import express
const express = require('express');
const commentController = require('../controllers/commentController');
const authController = require('../controllers/authController');

// 2. Create router
const router = express.Router();

// 3. Routes
router
  .route('/')
  .get(commentController.getAllComments)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    commentController.addComment
  );

router
  .route('/:id')
  .get(commentController.getComment)
  .patch(
    authController.protect,
    authController.restrictTo('user', 'admin'),
    commentController.updateComment
  )
  .delete(
    authController.protect,
    authController.restrictTo('user', 'admin'),
    commentController.deleteComment
  );

// 4. Export router
module.exports = router;