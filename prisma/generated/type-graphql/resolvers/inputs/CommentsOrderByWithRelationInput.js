"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CommentsOrderByWithRelationInput = class CommentsOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsOrderByWithRelationInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsOrderByWithRelationInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsOrderByWithRelationInput.prototype, "upadted_at", void 0);
CommentsOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CommentsOrderByWithRelationInput", {
        isAbstract: true
    })
], CommentsOrderByWithRelationInput);
exports.CommentsOrderByWithRelationInput = CommentsOrderByWithRelationInput;
