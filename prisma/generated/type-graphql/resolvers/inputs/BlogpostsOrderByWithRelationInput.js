"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountOrderByRelationAggregateInput_1 = require("../inputs/AccountOrderByRelationAggregateInput");
const TagsOrderByRelationAggregateInput_1 = require("../inputs/TagsOrderByRelationAggregateInput");
const TopicsOrderByWithRelationInput_1 = require("../inputs/TopicsOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BlogpostsOrderByWithRelationInput = class BlogpostsOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "excerpt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "banner", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "banneralt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "minuteRead", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "featured", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "topPick", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], BlogpostsOrderByWithRelationInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsOrderByWithRelationInput_1.TopicsOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsOrderByWithRelationInput_1.TopicsOrderByWithRelationInput)
], BlogpostsOrderByWithRelationInput.prototype, "topics", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "topicsId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsOrderByRelationAggregateInput_1.TagsOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsOrderByRelationAggregateInput_1.TagsOrderByRelationAggregateInput)
], BlogpostsOrderByWithRelationInput.prototype, "tags", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput)
], BlogpostsOrderByWithRelationInput.prototype, "savedBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithRelationInput.prototype, "blocked", void 0);
BlogpostsOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsOrderByWithRelationInput", {
        isAbstract: true
    })
], BlogpostsOrderByWithRelationInput);
exports.BlogpostsOrderByWithRelationInput = BlogpostsOrderByWithRelationInput;
