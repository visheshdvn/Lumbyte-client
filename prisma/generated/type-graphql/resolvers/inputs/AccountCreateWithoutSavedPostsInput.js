"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateWithoutSavedPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateNestedOneWithoutPublicAccountInput_1 = require("../inputs/UserCreateNestedOneWithoutPublicAccountInput");
let AccountCreateWithoutSavedPostsInput = class AccountCreateWithoutSavedPostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateWithoutSavedPostsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateWithoutSavedPostsInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateWithoutSavedPostsInput.prototype, "facebook", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateWithoutSavedPostsInput.prototype, "twitter", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateWithoutSavedPostsInput.prototype, "instagram", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateWithoutSavedPostsInput.prototype, "linkedin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateWithoutSavedPostsInput.prototype, "github", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateWithoutSavedPostsInput.prototype, "behance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateWithoutSavedPostsInput.prototype, "pintrest", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateWithoutSavedPostsInput.prototype, "eyeem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountCreateWithoutSavedPostsInput.prototype, "px365", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AccountCreateWithoutSavedPostsInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AccountCreateWithoutSavedPostsInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AccountCreateWithoutSavedPostsInput.prototype, "disabled", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPublicAccountInput_1.UserCreateNestedOneWithoutPublicAccountInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutPublicAccountInput_1.UserCreateNestedOneWithoutPublicAccountInput)
], AccountCreateWithoutSavedPostsInput.prototype, "user", void 0);
AccountCreateWithoutSavedPostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountCreateWithoutSavedPostsInput", {
        isAbstract: true
    })
], AccountCreateWithoutSavedPostsInput);
exports.AccountCreateWithoutSavedPostsInput = AccountCreateWithoutSavedPostsInput;
