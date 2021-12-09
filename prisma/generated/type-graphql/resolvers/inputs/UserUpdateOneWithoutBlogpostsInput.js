"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutBlogpostsInput_1 = require("../inputs/UserCreateOrConnectWithoutBlogpostsInput");
const UserCreateWithoutBlogpostsInput_1 = require("../inputs/UserCreateWithoutBlogpostsInput");
const UserUpdateWithoutBlogpostsInput_1 = require("../inputs/UserUpdateWithoutBlogpostsInput");
const UserUpsertWithoutBlogpostsInput_1 = require("../inputs/UserUpsertWithoutBlogpostsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutBlogpostsInput = class UserUpdateOneWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutBlogpostsInput_1.UserCreateWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutBlogpostsInput_1.UserCreateWithoutBlogpostsInput)
], UserUpdateOneWithoutBlogpostsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBlogpostsInput_1.UserCreateOrConnectWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutBlogpostsInput_1.UserCreateOrConnectWithoutBlogpostsInput)
], UserUpdateOneWithoutBlogpostsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutBlogpostsInput_1.UserUpsertWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutBlogpostsInput_1.UserUpsertWithoutBlogpostsInput)
], UserUpdateOneWithoutBlogpostsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutBlogpostsInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutBlogpostsInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutBlogpostsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutBlogpostsInput_1.UserUpdateWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutBlogpostsInput_1.UserUpdateWithoutBlogpostsInput)
], UserUpdateOneWithoutBlogpostsInput.prototype, "update", void 0);
UserUpdateOneWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneWithoutBlogpostsInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutBlogpostsInput);
exports.UserUpdateOneWithoutBlogpostsInput = UserUpdateOneWithoutBlogpostsInput;
