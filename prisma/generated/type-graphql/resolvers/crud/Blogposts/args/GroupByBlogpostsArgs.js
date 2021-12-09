"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBlogpostsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsOrderByWithAggregationInput_1 = require("../../../inputs/BlogpostsOrderByWithAggregationInput");
const BlogpostsScalarWhereWithAggregatesInput_1 = require("../../../inputs/BlogpostsScalarWhereWithAggregatesInput");
const BlogpostsWhereInput_1 = require("../../../inputs/BlogpostsWhereInput");
const BlogpostsScalarFieldEnum_1 = require("../../../../enums/BlogpostsScalarFieldEnum");
let GroupByBlogpostsArgs = class GroupByBlogpostsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereInput_1.BlogpostsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereInput_1.BlogpostsWhereInput)
], GroupByBlogpostsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsOrderByWithAggregationInput_1.BlogpostsOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByBlogpostsArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsScalarFieldEnum_1.BlogpostsScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByBlogpostsArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsScalarWhereWithAggregatesInput_1.BlogpostsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsScalarWhereWithAggregatesInput_1.BlogpostsScalarWhereWithAggregatesInput)
], GroupByBlogpostsArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByBlogpostsArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByBlogpostsArgs.prototype, "skip", void 0);
GroupByBlogpostsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByBlogpostsArgs);
exports.GroupByBlogpostsArgs = GroupByBlogpostsArgs;
