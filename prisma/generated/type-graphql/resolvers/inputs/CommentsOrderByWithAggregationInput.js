"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CommentsAvgOrderByAggregateInput_1 = require("../inputs/CommentsAvgOrderByAggregateInput");
const CommentsCountOrderByAggregateInput_1 = require("../inputs/CommentsCountOrderByAggregateInput");
const CommentsMaxOrderByAggregateInput_1 = require("../inputs/CommentsMaxOrderByAggregateInput");
const CommentsMinOrderByAggregateInput_1 = require("../inputs/CommentsMinOrderByAggregateInput");
const CommentsSumOrderByAggregateInput_1 = require("../inputs/CommentsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CommentsOrderByWithAggregationInput = class CommentsOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsOrderByWithAggregationInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsOrderByWithAggregationInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsOrderByWithAggregationInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CommentsCountOrderByAggregateInput_1.CommentsCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CommentsCountOrderByAggregateInput_1.CommentsCountOrderByAggregateInput)
], CommentsOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CommentsAvgOrderByAggregateInput_1.CommentsAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CommentsAvgOrderByAggregateInput_1.CommentsAvgOrderByAggregateInput)
], CommentsOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CommentsMaxOrderByAggregateInput_1.CommentsMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CommentsMaxOrderByAggregateInput_1.CommentsMaxOrderByAggregateInput)
], CommentsOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CommentsMinOrderByAggregateInput_1.CommentsMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CommentsMinOrderByAggregateInput_1.CommentsMinOrderByAggregateInput)
], CommentsOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CommentsSumOrderByAggregateInput_1.CommentsSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CommentsSumOrderByAggregateInput_1.CommentsSumOrderByAggregateInput)
], CommentsOrderByWithAggregationInput.prototype, "_sum", void 0);
CommentsOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CommentsOrderByWithAggregationInput", {
        isAbstract: true
    })
], CommentsOrderByWithAggregationInput);
exports.CommentsOrderByWithAggregationInput = CommentsOrderByWithAggregationInput;
