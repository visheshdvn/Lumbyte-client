"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBlogposts = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsAvgAggregate_1 = require("../outputs/BlogpostsAvgAggregate");
const BlogpostsCountAggregate_1 = require("../outputs/BlogpostsCountAggregate");
const BlogpostsMaxAggregate_1 = require("../outputs/BlogpostsMaxAggregate");
const BlogpostsMinAggregate_1 = require("../outputs/BlogpostsMinAggregate");
const BlogpostsSumAggregate_1 = require("../outputs/BlogpostsSumAggregate");
let AggregateBlogposts = class AggregateBlogposts {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCountAggregate_1.BlogpostsCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCountAggregate_1.BlogpostsCountAggregate)
], AggregateBlogposts.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsAvgAggregate_1.BlogpostsAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsAvgAggregate_1.BlogpostsAvgAggregate)
], AggregateBlogposts.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsSumAggregate_1.BlogpostsSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsSumAggregate_1.BlogpostsSumAggregate)
], AggregateBlogposts.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsMinAggregate_1.BlogpostsMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsMinAggregate_1.BlogpostsMinAggregate)
], AggregateBlogposts.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsMaxAggregate_1.BlogpostsMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsMaxAggregate_1.BlogpostsMaxAggregate)
], AggregateBlogposts.prototype, "_max", void 0);
AggregateBlogposts = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateBlogposts", {
        isAbstract: true
    })
], AggregateBlogposts);
exports.AggregateBlogposts = AggregateBlogposts;
