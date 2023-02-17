"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
    },
    provider: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});
module.exports = mongoose.model('User', UserSchema);
