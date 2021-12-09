"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BlogpostsOrderByRelationAggregateInput = class BlogpostsOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsOrderByRelationAggregateInput.prototype, "_count", void 0);
BlogpostsOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsOrderByRelationAggregateInput", {
        isAbstract: true
    })
], BlogpostsOrderByRelationAggregateInput);
exports.BlogpostsOrderByRelationAggregateInput = BlogpostsOrderByRelationAggregateInput;
