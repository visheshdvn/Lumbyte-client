"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TopicsAvgOrderByAggregateInput = class TopicsAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsAvgOrderByAggregateInput.prototype, "id", void 0);
TopicsAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TopicsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TopicsAvgOrderByAggregateInput);
exports.TopicsAvgOrderByAggregateInput = TopicsAvgOrderByAggregateInput;
