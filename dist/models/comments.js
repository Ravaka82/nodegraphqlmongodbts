"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var User = require('./users');
var CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true,
});
module.exports = mongoose.model('Comment', CommentSchema);
