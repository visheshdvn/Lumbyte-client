"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TopicsSumOrderByAggregateInput = class TopicsSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsSumOrderByAggregateInput.prototype, "id", void 0);
TopicsSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TopicsSumOrderByAggregateInput", {
        isAbstract: true
    })
], TopicsSumOrderByAggregateInput);
exports.TopicsSumOrderByAggregateInput = TopicsSumOrderByAggregateInput;
