"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsAvgOrderByAggregateInput_1 = require("../inputs/BlogpostsAvgOrderByAggregateInput");
const BlogpostsCountOrderByAggregateInput_1 = require("../inputs/BlogpostsCountOrderByAggregateInput");
const BlogpostsMaxOrderByAggregateInput_1 = require("../inputs/BlogpostsMaxOrderByAggregateInput");
const BlogpostsMinOrderByAggregateInput_1 = require("../inputs/BlogpostsMinOrderByAggregateInput");
const BlogpostsSumOrderByAggregateInput_1 = require("../inputs/BlogpostsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BlogpostsOrderByWithAggregationInput = class BlogpostsOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "excerpt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "banner", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "banneralt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "minuteRead", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "featured", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "topPick", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "topicsId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByWithAggregationInput.prototype, "blocked", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCountOrderByAggregateInput_1.BlogpostsCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCountOrderByAggregateInput_1.BlogpostsCountOrderByAggregateInput)
], BlogpostsOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsAvgOrderByAggregateInput_1.BlogpostsAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsAvgOrderByAggregateInput_1.BlogpostsAvgOrderByAggregateInput)
], BlogpostsOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsMaxOrderByAggregateInput_1.BlogpostsMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsMaxOrderByAggregateInput_1.BlogpostsMaxOrderByAggregateInput)
], BlogpostsOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsMinOrderByAggregateInput_1.BlogpostsMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsMinOrderByAggregateInput_1.BlogpostsMinOrderByAggregateInput)
], BlogpostsOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsSumOrderByAggregateInput_1.BlogpostsSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsSumOrderByAggregateInput_1.BlogpostsSumOrderByAggregateInput)
], BlogpostsOrderByWithAggregationInput.prototype, "_sum", void 0);
BlogpostsOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsOrderByWithAggregationInput", {
        isAbstract: true
    })
], BlogpostsOrderByWithAggregationInput);
exports.BlogpostsOrderByWithAggregationInput = BlogpostsOrderByWithAggregationInput;
