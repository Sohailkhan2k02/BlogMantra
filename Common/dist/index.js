"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCommentInput = exports.createCommentInput = exports.updatePostInput = exports.createPostInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string(),
});
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
exports.createPostInput = zod_1.default.object({
    title: zod_1.default.string().min(4),
    content: zod_1.default.string().min(4),
});
exports.updatePostInput = zod_1.default.object({
    title: zod_1.default.string().optional(),
    content: zod_1.default.string().optional(),
});
exports.createCommentInput = zod_1.default.object({
    content: zod_1.default.string().min(1).max(255),
});
exports.updateCommentInput = zod_1.default.object({
    content: zod_1.default.string().min(1).max(255),
});
