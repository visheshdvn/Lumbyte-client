"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let BlogpostsSumAggregate = class BlogpostsSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsSumAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsSumAggregate.prototype, "minuteRead", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsSumAggregate.prototype, "topicsId", void 0);
BlogpostsSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("BlogpostsSumAggregate", {
        isAbstract: true
    })
], BlogpostsSumAggregate);
exports.BlogpostsSumAggregate = BlogpostsSumAggregate;
