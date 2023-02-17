"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsController = void 0;
var auth_decorator_1 = require("../decorators/auth.decorator");
var Blogs = require('../models/blogs');
var BlogsController = (function () {
    function BlogsController() {
    }
    BlogsController.prototype.getBlog = function (args, ctx) {
        return Blogs.find({ url: args['url'] })
            .populate({
            path: 'comments',
            model: 'Comment',
            populate: {
                path: 'user',
                model: 'User',
            },
        })
            .then(function (blogs) {
            return blogs[0];
        });
    };
    BlogsController.prototype.getBlogs = function (args, ctx) {
        return Blogs.find()
            .populate({
            path: 'comments',
            model: 'Comment',
            populate: {
                path: 'user',
                model: 'User',
            },
        })
            .then(function (blogs) {
            return blogs;
        });
    };
    BlogsController.prototype.addBlog = function (inputObject, ctx) {
        return Blogs.create(inputObject.input).then(function (blogInfo) {
            return blogInfo;
        });
    };
    BlogsController.prototype.updateBlog = function (inputObject, ctx) {
        return Blogs.findOneAndUpdate({ _id: inputObject.id }, inputObject.input, { new: true }).then(function (blogInfo) {
            return blogInfo;
        });
    };
    BlogsController.prototype.deleteBlog = function (inputObject, ctx) {
        return Blogs.findOneAndDelete({ _id: inputObject.id }).then(function (blogInfo) {
            return blogInfo;
        });
    };
    __decorate([
        auth_decorator_1.VerifyAuthorization,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], BlogsController.prototype, "getBlog", null);
    __decorate([
        auth_decorator_1.VerifyAuthorization,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], BlogsController.prototype, "getBlogs", null);
    __decorate([
        auth_decorator_1.VerifyAuthorization,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], BlogsController.prototype, "addBlog", null);
    __decorate([
        auth_decorator_1.VerifyAuthorization,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], BlogsController.prototype, "updateBlog", null);
    __decorate([
        auth_decorator_1.VerifyAuthorization,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], BlogsController.prototype, "deleteBlog", null);
    return BlogsController;
}());
exports.BlogsController = BlogsController;
