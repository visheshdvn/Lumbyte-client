"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutBlogpostsInput_1 = require("../inputs/UserCreateOrConnectWithoutBlogpostsInput");
const UserCreateWithoutBlogpostsInput_1 = require("../inputs/UserCreateWithoutBlogpostsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutBlogpostsInput = class UserCreateNestedOneWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutBlogpostsInput_1.UserCreateWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutBlogpostsInput_1.UserCreateWithoutBlogpostsInput)
], UserCreateNestedOneWithoutBlogpostsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBlogpostsInput_1.UserCreateOrConnectWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutBlogpostsInput_1.UserCreateOrConnectWithoutBlogpostsInput)
], UserCreateNestedOneWithoutBlogpostsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutBlogpostsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutBlogpostsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutBlogpostsInput);
exports.UserCreateNestedOneWithoutBlogpostsInput = UserCreateNestedOneWithoutBlogpostsInput;
