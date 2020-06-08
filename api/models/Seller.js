const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        role: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});

module.exports = mongoose.model('seller', sellerSchema);
