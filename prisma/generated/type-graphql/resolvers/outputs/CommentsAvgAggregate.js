"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let CommentsAvgAggregate = class CommentsAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CommentsAvgAggregate.prototype, "id", void 0);
CommentsAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("CommentsAvgAggregate", {
        isAbstract: true
    })
], CommentsAvgAggregate);
exports.CommentsAvgAggregate = CommentsAvgAggregate;
