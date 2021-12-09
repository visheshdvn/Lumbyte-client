"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutPublicAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountCreateNestedOneWithoutUserInput_1 = require("../inputs/AdminAccountCreateNestedOneWithoutUserInput");
const BlogpostsCreateNestedManyWithoutAuthorInput_1 = require("../inputs/BlogpostsCreateNestedManyWithoutAuthorInput");
let UserCreateWithoutPublicAccountInput = class UserCreateWithoutPublicAccountInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPublicAccountInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPublicAccountInput.prototype, "firstname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPublicAccountInput.prototype, "lastname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPublicAccountInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPublicAccountInput.prototype, "about", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPublicAccountInput.prototype, "dp", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPublicAccountInput.prototype, "dpalt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPublicAccountInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPublicAccountInput.prototype, "phone", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPublicAccountInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutPublicAccountInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutPublicAccountInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutPublicAccountInput.prototype, "adminGrant", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateNestedManyWithoutAuthorInput_1.BlogpostsCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateNestedManyWithoutAuthorInput_1.BlogpostsCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutPublicAccountInput.prototype, "blogposts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountCreateNestedOneWithoutUserInput_1.AdminAccountCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountCreateNestedOneWithoutUserInput_1.AdminAccountCreateNestedOneWithoutUserInput)
], UserCreateWithoutPublicAccountInput.prototype, "adminAccount", void 0);
UserCreateWithoutPublicAccountInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutPublicAccountInput", {
        isAbstract: true
    })
], UserCreateWithoutPublicAccountInput);
exports.UserCreateWithoutPublicAccountInput = UserCreateWithoutPublicAccountInput;
