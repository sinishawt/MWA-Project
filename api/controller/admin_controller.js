const Admin = require('../models/Admin');
const Review = require('../models/Review');

const dateNow = new Date();

exports.viewPendingReviews = (req, res, next) => {

    Review.find({status: "Created"})
    .then(result => {   
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });

};

exports.postReview = (req, res, next) => {
    Review.findByIdAndUpdate(req.params.reviewId, {status: "Posted", decisionDate: dateNow})
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};

exports.declineReview = (req, res, next) => {
    Review.findByIdAndUpdate(req.params.reviewId, {status: "Declined"})
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};
