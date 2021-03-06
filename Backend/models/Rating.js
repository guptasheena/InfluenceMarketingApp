const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const TaskSchema = require("../models/Task").schema

var RatingSchema = new Schema({
    rating: Number,
    ratedOn: {type: Date, default: Date.now},
    task: String, // task id
    influencer: String, //influencer email,
    comment: String,
    sponsor: String  //sponsor email
});

module.exports = Rating = mongoose.model('Rating', RatingSchema); 