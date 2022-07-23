const {Schema, model} = require("mongoose");

const schema = new Schema({
    promo: String,
    date: Object,
    use_count: String,
    creator: String
}, {
    timestamps: true
});

module.exports = model("Promo", schema);
