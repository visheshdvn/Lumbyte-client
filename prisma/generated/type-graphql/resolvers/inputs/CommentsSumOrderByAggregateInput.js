"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CommentsSumOrderByAggregateInput = class CommentsSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsSumOrderByAggregateInput.prototype, "id", void 0);
CommentsSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CommentsSumOrderByAggregateInput", {
        isAbstract: true
    })
], CommentsSumOrderByAggregateInput);
exports.CommentsSumOrderByAggregateInput = CommentsSumOrderByAggregateInput;
