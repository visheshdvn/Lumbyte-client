"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutBlogpostsInput_1 = require("../inputs/UserCreateWithoutBlogpostsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutBlogpostsInput = class UserCreateOrConnectWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutBlogpostsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutBlogpostsInput_1.UserCreateWithoutBlogpostsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutBlogpostsInput_1.UserCreateWithoutBlogpostsInput)
], UserCreateOrConnectWithoutBlogpostsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutBlogpostsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutBlogpostsInput);
exports.UserCreateOrConnectWithoutBlogpostsInput = UserCreateOrConnectWithoutBlogpostsInput;
