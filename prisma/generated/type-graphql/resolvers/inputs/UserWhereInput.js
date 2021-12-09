"use strict";
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountRelationFilter_1 = require("../inputs/AccountRelationFilter");
const AdminAccountRelationFilter_1 = require("../inputs/AdminAccountRelationFilter");
const BlogpostsListRelationFilter_1 = require("../inputs/BlogpostsListRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "firstname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "lastname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "about", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "dp", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "dpalt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "phone", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsListRelationFilter_1.BlogpostsListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsListRelationFilter_1.BlogpostsListRelationFilter)
], UserWhereInput.prototype, "blogposts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountRelationFilter_1.AccountRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountRelationFilter_1.AccountRelationFilter)
], UserWhereInput.prototype, "publicAccount", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountRelationFilter_1.AdminAccountRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountRelationFilter_1.AdminAccountRelationFilter)
], UserWhereInput.prototype, "adminAccount", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFilter_1.BoolFilter)
], UserWhereInput.prototype, "adminGrant", void 0);
UserWhereInput = UserWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserWhereInput", {
        isAbstract: true
    })
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
