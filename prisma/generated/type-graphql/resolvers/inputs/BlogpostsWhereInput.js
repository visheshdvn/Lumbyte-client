"use strict";
var BlogpostsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountListRelationFilter_1 = require("../inputs/AccountListRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TagsListRelationFilter_1 = require("../inputs/TagsListRelationFilter");
const TopicsRelationFilter_1 = require("../inputs/TopicsRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let BlogpostsWhereInput = BlogpostsWhereInput_1 = class BlogpostsWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], BlogpostsWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], BlogpostsWhereInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], BlogpostsWhereInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], BlogpostsWhereInput.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], BlogpostsWhereInput.prototype, "excerpt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], BlogpostsWhereInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], BlogpostsWhereInput.prototype, "banner", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], BlogpostsWhereInput.prototype, "banneralt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], BlogpostsWhereInput.prototype, "minuteRead", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolNullableFilter_1.BoolNullableFilter)
], BlogpostsWhereInput.prototype, "featured", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolNullableFilter_1.BoolNullableFilter)
], BlogpostsWhereInput.prototype, "topPick", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], BlogpostsWhereInput.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserRelationFilter_1.UserRelationFilter)
], BlogpostsWhereInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], BlogpostsWhereInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsRelationFilter_1.TopicsRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsRelationFilter_1.TopicsRelationFilter)
], BlogpostsWhereInput.prototype, "topics", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], BlogpostsWhereInput.prototype, "topicsId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsListRelationFilter_1.TagsListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsListRelationFilter_1.TagsListRelationFilter)
], BlogpostsWhereInput.prototype, "tags", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountListRelationFilter_1.AccountListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountListRelationFilter_1.AccountListRelationFilter)
], BlogpostsWhereInput.prototype, "savedBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], BlogpostsWhereInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], BlogpostsWhereInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], BlogpostsWhereInput.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFilter_1.BoolFilter)
], BlogpostsWhereInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFilter_1.BoolFilter)
], BlogpostsWhereInput.prototype, "blocked", void 0);
BlogpostsWhereInput = BlogpostsWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsWhereInput", {
        isAbstract: true
    })
], BlogpostsWhereInput);
exports.BlogpostsWhereInput = BlogpostsWhereInput;
