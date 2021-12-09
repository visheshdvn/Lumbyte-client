"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutBlogpostsInput_1 = require("../inputs/UserCreateWithoutBlogpostsInput");
const UserUpdateWithoutBlogpostsInput_1 = require("../inputs/UserUpdateWithoutBlogpostsInput");
let UserUpsertWithoutBlogpostsInput = class UserUpsertWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutBlogpostsInput_1.UserUpdateWithoutBlogpostsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutBlogpostsInput_1.UserUpdateWithoutBlogpostsInput)
], UserUpsertWithoutBlogpostsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutBlogpostsInput_1.UserCreateWithoutBlogpostsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutBlogpostsInput_1.UserCreateWithoutBlogpostsInput)
], UserUpsertWithoutBlogpostsInput.prototype, "create", void 0);
UserUpsertWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpsertWithoutBlogpostsInput", {
        isAbstract: true
    })
], UserUpsertWithoutBlogpostsInput);
exports.UserUpsertWithoutBlogpostsInput = UserUpsertWithoutBlogpostsInput;
