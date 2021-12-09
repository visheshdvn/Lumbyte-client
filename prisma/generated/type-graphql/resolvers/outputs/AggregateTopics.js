"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTopics = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsAvgAggregate_1 = require("../outputs/TopicsAvgAggregate");
const TopicsCountAggregate_1 = require("../outputs/TopicsCountAggregate");
const TopicsMaxAggregate_1 = require("../outputs/TopicsMaxAggregate");
const TopicsMinAggregate_1 = require("../outputs/TopicsMinAggregate");
const TopicsSumAggregate_1 = require("../outputs/TopicsSumAggregate");
let AggregateTopics = class AggregateTopics {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsCountAggregate_1.TopicsCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsCountAggregate_1.TopicsCountAggregate)
], AggregateTopics.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsAvgAggregate_1.TopicsAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsAvgAggregate_1.TopicsAvgAggregate)
], AggregateTopics.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsSumAggregate_1.TopicsSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsSumAggregate_1.TopicsSumAggregate)
], AggregateTopics.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsMinAggregate_1.TopicsMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsMinAggregate_1.TopicsMinAggregate)
], AggregateTopics.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsMaxAggregate_1.TopicsMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsMaxAggregate_1.TopicsMaxAggregate)
], AggregateTopics.prototype, "_max", void 0);
AggregateTopics = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateTopics", {
        isAbstract: true
    })
], AggregateTopics);
exports.AggregateTopics = AggregateTopics;
