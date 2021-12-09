"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let BlogpostsAvgAggregate = class BlogpostsAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsAvgAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsAvgAggregate.prototype, "minuteRead", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsAvgAggregate.prototype, "topicsId", void 0);
BlogpostsAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("BlogpostsAvgAggregate", {
        isAbstract: true
    })
], BlogpostsAvgAggregate);
exports.BlogpostsAvgAggregate = BlogpostsAvgAggregate;
