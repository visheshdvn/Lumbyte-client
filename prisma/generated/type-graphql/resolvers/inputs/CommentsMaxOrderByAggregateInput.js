"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CommentsMaxOrderByAggregateInput = class CommentsMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsMaxOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsMaxOrderByAggregateInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsMaxOrderByAggregateInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsMaxOrderByAggregateInput.prototype, "upadted_at", void 0);
CommentsMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CommentsMaxOrderByAggregateInput", {
        isAbstract: true
    })
], CommentsMaxOrderByAggregateInput);
exports.CommentsMaxOrderByAggregateInput = CommentsMaxOrderByAggregateInput;
