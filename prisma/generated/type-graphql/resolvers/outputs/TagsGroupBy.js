"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagsAvgAggregate_1 = require("../outputs/TagsAvgAggregate");
const TagsCountAggregate_1 = require("../outputs/TagsCountAggregate");
const TagsMaxAggregate_1 = require("../outputs/TagsMaxAggregate");
const TagsMinAggregate_1 = require("../outputs/TagsMinAggregate");
const TagsSumAggregate_1 = require("../outputs/TagsSumAggregate");
let TagsGroupBy = class TagsGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TagsGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsGroupBy.prototype, "tagname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsGroupBy.prototype, "color", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsGroupBy.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsGroupBy.prototype, "ogimg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsGroupBy.prototype, "ogalt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TagsGroupBy.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TagsGroupBy.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TagsGroupBy.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], TagsGroupBy.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsCountAggregate_1.TagsCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsCountAggregate_1.TagsCountAggregate)
], TagsGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsAvgAggregate_1.TagsAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsAvgAggregate_1.TagsAvgAggregate)
], TagsGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsSumAggregate_1.TagsSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsSumAggregate_1.TagsSumAggregate)
], TagsGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsMinAggregate_1.TagsMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsMinAggregate_1.TagsMinAggregate)
], TagsGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsMaxAggregate_1.TagsMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsMaxAggregate_1.TagsMaxAggregate)
], TagsGroupBy.prototype, "_max", void 0);
TagsGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TagsGroupBy", {
        isAbstract: true
    })
], TagsGroupBy);
exports.TagsGroupBy = TagsGroupBy;
