"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsAvgAggregate_1 = require("../outputs/TopicsAvgAggregate");
const TopicsCountAggregate_1 = require("../outputs/TopicsCountAggregate");
const TopicsMaxAggregate_1 = require("../outputs/TopicsMaxAggregate");
const TopicsMinAggregate_1 = require("../outputs/TopicsMinAggregate");
const TopicsSumAggregate_1 = require("../outputs/TopicsSumAggregate");
let TopicsGroupBy = class TopicsGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicsGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsGroupBy.prototype, "topicname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsGroupBy.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsGroupBy.prototype, "ogimg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsGroupBy.prototype, "ogalt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TopicsGroupBy.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TopicsGroupBy.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TopicsGroupBy.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], TopicsGroupBy.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsCountAggregate_1.TopicsCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsCountAggregate_1.TopicsCountAggregate)
], TopicsGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsAvgAggregate_1.TopicsAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsAvgAggregate_1.TopicsAvgAggregate)
], TopicsGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsSumAggregate_1.TopicsSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsSumAggregate_1.TopicsSumAggregate)
], TopicsGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsMinAggregate_1.TopicsMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsMinAggregate_1.TopicsMinAggregate)
], TopicsGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsMaxAggregate_1.TopicsMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsMaxAggregate_1.TopicsMaxAggregate)
], TopicsGroupBy.prototype, "_max", void 0);
TopicsGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TopicsGroupBy", {
        isAbstract: true
    })
], TopicsGroupBy);
exports.TopicsGroupBy = TopicsGroupBy;
