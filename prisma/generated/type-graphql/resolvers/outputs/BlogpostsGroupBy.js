"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsAvgAggregate_1 = require("../outputs/BlogpostsAvgAggregate");
const BlogpostsCountAggregate_1 = require("../outputs/BlogpostsCountAggregate");
const BlogpostsMaxAggregate_1 = require("../outputs/BlogpostsMaxAggregate");
const BlogpostsMinAggregate_1 = require("../outputs/BlogpostsMinAggregate");
const BlogpostsSumAggregate_1 = require("../outputs/BlogpostsSumAggregate");
let BlogpostsGroupBy = class BlogpostsGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsGroupBy.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsGroupBy.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsGroupBy.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsGroupBy.prototype, "excerpt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsGroupBy.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsGroupBy.prototype, "banner", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsGroupBy.prototype, "banneralt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsGroupBy.prototype, "minuteRead", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsGroupBy.prototype, "featured", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsGroupBy.prototype, "topPick", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsGroupBy.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsGroupBy.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsGroupBy.prototype, "topicsId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsGroupBy.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsGroupBy.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsGroupBy.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsGroupBy.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsGroupBy.prototype, "blocked", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCountAggregate_1.BlogpostsCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCountAggregate_1.BlogpostsCountAggregate)
], BlogpostsGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsAvgAggregate_1.BlogpostsAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsAvgAggregate_1.BlogpostsAvgAggregate)
], BlogpostsGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsSumAggregate_1.BlogpostsSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsSumAggregate_1.BlogpostsSumAggregate)
], BlogpostsGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsMinAggregate_1.BlogpostsMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsMinAggregate_1.BlogpostsMinAggregate)
], BlogpostsGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsMaxAggregate_1.BlogpostsMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsMaxAggregate_1.BlogpostsMaxAggregate)
], BlogpostsGroupBy.prototype, "_max", void 0);
BlogpostsGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("BlogpostsGroupBy", {
        isAbstract: true
    })
], BlogpostsGroupBy);
exports.BlogpostsGroupBy = BlogpostsGroupBy;
