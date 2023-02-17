"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = __importStar(require("jsonwebtoken"));
var blogs_controller_1 = require("../../controllers/blogs.controller");
var comments_controller_1 = require("../../controllers/comments.controller");
var app_constants_1 = require("../../constants/app.constants");
var users_controller_1 = require("../../controllers/users.controller");
var blogController = new blogs_controller_1.BlogsController();
var commentsController = new comments_controller_1.CommentsController();
var usersController = new users_controller_1.UsersController();
var resolvers = {
    Query: {
        blog: function (_, args, ctx, _info) {
            return blogController.getBlog(args, ctx);
        },
        blogs: function (_, args, ctx, _info) {
            return blogController.getBlogs(args, ctx);
        },
        token: function (_, args) {
            return jwt.sign({ data: args[app_constants_1.AppConstants.EMAIL] }, process.env.auth_encryption_salt);
        },
    },
    Mutation: {
        addBlog: function (_, inputObject, ctx) {
            return blogController.addBlog(inputObject, ctx);
        },
        updateBlog: function (_, inputObject, ctx) {
            return blogController.updateBlog(inputObject, ctx);
        },
        deleteBlog: function (_, inputObject, ctx) {
            return blogController.deleteBlog(inputObject, ctx);
        },
        addComment: function (_, inputObject, ctx) {
            return commentsController.addComment(inputObject, ctx);
        },
        updateComment: function (_, inputObject, ctx) {
            return commentsController.updateComment(inputObject, ctx);
        },
        deleteComment: function (_, inputObject, ctx) {
            return commentsController.deleteComment(inputObject, ctx);
        },
        addUser: function (_, inputObject, ctx) {
            return usersController.addUser(inputObject, ctx);
        },
        updateUser: function (_, inputObject, ctx) {
            return usersController.updateUser(inputObject, ctx);
        },
    },
};
exports.default = resolvers;
