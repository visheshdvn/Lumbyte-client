"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TopicsAvgAggregate = class TopicsAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicsAvgAggregate.prototype, "id", void 0);
TopicsAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TopicsAvgAggregate", {
        isAbstract: true
    })
], TopicsAvgAggregate);
exports.TopicsAvgAggregate = TopicsAvgAggregate;
