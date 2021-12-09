"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BlogpostsAvgOrderByAggregateInput = class BlogpostsAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsAvgOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsAvgOrderByAggregateInput.prototype, "minuteRead", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsAvgOrderByAggregateInput.prototype, "topicsId", void 0);
BlogpostsAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], BlogpostsAvgOrderByAggregateInput);
exports.BlogpostsAvgOrderByAggregateInput = BlogpostsAvgOrderByAggregateInput;
