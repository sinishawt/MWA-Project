const express = require('express');
const router = express.Router();

const admin_Controller = require('../controller/admin_controller');

router.get('/pendingReviews', admin_Controller.viewPendingReviews);
router.post('/pendingReviews/:reviewId', admin_Controller.postReview);
router.delete('/pendingReviews/:reviewId', admin_Controller.declineReview);

module.exports = router;