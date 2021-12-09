"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateNestedOneWithoutUserInput_1 = require("../inputs/AccountCreateNestedOneWithoutUserInput");
const AdminAccountCreateNestedOneWithoutUserInput_1 = require("../inputs/AdminAccountCreateNestedOneWithoutUserInput");
let UserCreateWithoutBlogpostsInput = class UserCreateWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutBlogpostsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutBlogpostsInput.prototype, "firstname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutBlogpostsInput.prototype, "lastname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutBlogpostsInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutBlogpostsInput.prototype, "about", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutBlogpostsInput.prototype, "dp", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutBlogpostsInput.prototype, "dpalt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutBlogpostsInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutBlogpostsInput.prototype, "phone", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutBlogpostsInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutBlogpostsInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutBlogpostsInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutBlogpostsInput.prototype, "adminGrant", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutUserInput_1.AccountCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateNestedOneWithoutUserInput_1.AccountCreateNestedOneWithoutUserInput)
], UserCreateWithoutBlogpostsInput.prototype, "publicAccount", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountCreateNestedOneWithoutUserInput_1.AdminAccountCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountCreateNestedOneWithoutUserInput_1.AdminAccountCreateNestedOneWithoutUserInput)
], UserCreateWithoutBlogpostsInput.prototype, "adminAccount", void 0);
UserCreateWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutBlogpostsInput", {
        isAbstract: true
    })
], UserCreateWithoutBlogpostsInput);
exports.UserCreateWithoutBlogpostsInput = UserCreateWithoutBlogpostsInput;
