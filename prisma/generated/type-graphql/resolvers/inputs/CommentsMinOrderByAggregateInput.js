"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CommentsMinOrderByAggregateInput = class CommentsMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsMinOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsMinOrderByAggregateInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsMinOrderByAggregateInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsMinOrderByAggregateInput.prototype, "upadted_at", void 0);
CommentsMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CommentsMinOrderByAggregateInput", {
        isAbstract: true
    })
], CommentsMinOrderByAggregateInput);
exports.CommentsMinOrderByAggregateInput = CommentsMinOrderByAggregateInput;
