"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOrderByRelationAggregateInput = class TagsOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsOrderByRelationAggregateInput.prototype, "_count", void 0);
TagsOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagsOrderByRelationAggregateInput", {
        isAbstract: true
    })
], TagsOrderByRelationAggregateInput);
exports.TagsOrderByRelationAggregateInput = TagsOrderByRelationAggregateInput;
