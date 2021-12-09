"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateNestedManyWithoutSavedByInput_1 = require("../inputs/BlogpostsCreateNestedManyWithoutSavedByInput");
const UserCreateNestedOneWithoutPublicAccountInput_1 = require("../inputs/UserCreateNestedOneWithoutPublicAccountInput");
let AccountCreateInput = class AccountCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateInput.prototype, "facebook", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateInput.prototype, "twitter", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateInput.prototype, "instagram", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateInput.prototype, "linkedin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateInput.prototype, "github", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateInput.prototype, "behance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateInput.prototype, "pintrest", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateInput.prototype, "eyeem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateInput.prototype, "px365", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AccountCreateInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AccountCreateInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AccountCreateInput.prototype, "disabled", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPublicAccountInput_1.UserCreateNestedOneWithoutPublicAccountInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutPublicAccountInput_1.UserCreateNestedOneWithoutPublicAccountInput)
], AccountCreateInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateNestedManyWithoutSavedByInput_1.BlogpostsCreateNestedManyWithoutSavedByInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateNestedManyWithoutSavedByInput_1.BlogpostsCreateNestedManyWithoutSavedByInput)
], AccountCreateInput.prototype, "savedPosts", void 0);
AccountCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountCreateInput", {
        isAbstract: true
    })
], AccountCreateInput);
exports.AccountCreateInput = AccountCreateInput;
