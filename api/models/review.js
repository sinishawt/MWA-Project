const mongoose = require('mongoose');

const dateNow = new Date();

const reviewSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    orderProductId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    status: { type: String, required : true},
    buyerId: { type: Number, required : true},
    createdDate: { type: Date, default: dateNow, required : true},
    stars: { type: Number, required : true},
    comment: { type: String, required : true},
    decisionDate: { type: Date, required : false}
});

module.exports = mongoose.model('review', reviewSchema);
