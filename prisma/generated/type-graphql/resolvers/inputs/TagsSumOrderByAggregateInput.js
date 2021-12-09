"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagsSumOrderByAggregateInput = class TagsSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsSumOrderByAggregateInput.prototype, "id", void 0);
TagsSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagsSumOrderByAggregateInput", {
        isAbstract: true
    })
], TagsSumOrderByAggregateInput);
exports.TagsSumOrderByAggregateInput = TagsSumOrderByAggregateInput;
