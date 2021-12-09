"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CommentsCountOrderByAggregateInput = class CommentsCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsCountOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsCountOrderByAggregateInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsCountOrderByAggregateInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsCountOrderByAggregateInput.prototype, "upadted_at", void 0);
CommentsCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CommentsCountOrderByAggregateInput", {
        isAbstract: true
    })
], CommentsCountOrderByAggregateInput);
exports.CommentsCountOrderByAggregateInput = CommentsCountOrderByAggregateInput;
