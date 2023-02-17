"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
var Users = require('../models/users');
var UsersController = (function () {
    function UsersController() {
    }
    UsersController.prototype.addUser = function (inputObject, ctx) {
        return Users.create(inputObject.input).then(function (userInfo) {
            return userInfo;
        });
    };
    UsersController.prototype.updateUser = function (inputObject, ctx) {
        return Users.findOneAndUpdate({ _id: inputObject.id }, inputObject.input, { new: true }).then(function (userInfo) {
            return userInfo;
        });
    };
    return UsersController;
}());
exports.UsersController = UsersController;
