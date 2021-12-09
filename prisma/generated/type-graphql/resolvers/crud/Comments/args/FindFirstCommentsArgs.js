"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CommentsOrderByWithRelationInput_1 = require("../../../inputs/CommentsOrderByWithRelationInput");
const CommentsWhereInput_1 = require("../../../inputs/CommentsWhereInput");
const CommentsWhereUniqueInput_1 = require("../../../inputs/CommentsWhereUniqueInput");
const CommentsScalarFieldEnum_1 = require("../../../../enums/CommentsScalarFieldEnum");
let FindFirstCommentsArgs = class FindFirstCommentsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CommentsWhereInput_1.CommentsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CommentsWhereInput_1.CommentsWhereInput)
], FindFirstCommentsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CommentsOrderByWithRelationInput_1.CommentsOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstCommentsArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CommentsWhereUniqueInput_1.CommentsWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CommentsWhereUniqueInput_1.CommentsWhereUniqueInput)
], FindFirstCommentsArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstCommentsArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstCommentsArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CommentsScalarFieldEnum_1.CommentsScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstCommentsArgs.prototype, "distinct", void 0);
FindFirstCommentsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstCommentsArgs);
exports.FindFirstCommentsArgs = FindFirstCommentsArgs;
