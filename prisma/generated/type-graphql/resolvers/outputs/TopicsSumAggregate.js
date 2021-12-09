"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TopicsSumAggregate = class TopicsSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicsSumAggregate.prototype, "id", void 0);
TopicsSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TopicsSumAggregate", {
        isAbstract: true
    })
], TopicsSumAggregate);
exports.TopicsSumAggregate = TopicsSumAggregate;
