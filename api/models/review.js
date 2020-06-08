const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    //orderProductId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    status: String,
    buyerId: Number,
    createdDate: Date,
    stars: Number,
    comment: String,
    decisionDate: Date
});

module.exports = mongoose.model('review', reviewSchema);
