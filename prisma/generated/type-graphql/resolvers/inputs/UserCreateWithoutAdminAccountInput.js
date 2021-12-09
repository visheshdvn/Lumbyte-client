"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAdminAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateNestedOneWithoutUserInput_1 = require("../inputs/AccountCreateNestedOneWithoutUserInput");
const BlogpostsCreateNestedManyWithoutAuthorInput_1 = require("../inputs/BlogpostsCreateNestedManyWithoutAuthorInput");
let UserCreateWithoutAdminAccountInput = class UserCreateWithoutAdminAccountInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdminAccountInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdminAccountInput.prototype, "firstname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdminAccountInput.prototype, "lastname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdminAccountInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdminAccountInput.prototype, "about", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdminAccountInput.prototype, "dp", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdminAccountInput.prototype, "dpalt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdminAccountInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdminAccountInput.prototype, "phone", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdminAccountInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutAdminAccountInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutAdminAccountInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutAdminAccountInput.prototype, "adminGrant", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateNestedManyWithoutAuthorInput_1.BlogpostsCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateNestedManyWithoutAuthorInput_1.BlogpostsCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutAdminAccountInput.prototype, "blogposts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutUserInput_1.AccountCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateNestedOneWithoutUserInput_1.AccountCreateNestedOneWithoutUserInput)
], UserCreateWithoutAdminAccountInput.prototype, "publicAccount", void 0);
UserCreateWithoutAdminAccountInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutAdminAccountInput", {
        isAbstract: true
    })
], UserCreateWithoutAdminAccountInput);
exports.UserCreateWithoutAdminAccountInput = UserCreateWithoutAdminAccountInput;
