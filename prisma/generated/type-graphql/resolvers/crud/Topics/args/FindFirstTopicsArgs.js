"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTopicsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsOrderByWithRelationInput_1 = require("../../../inputs/TopicsOrderByWithRelationInput");
const TopicsWhereInput_1 = require("../../../inputs/TopicsWhereInput");
const TopicsWhereUniqueInput_1 = require("../../../inputs/TopicsWhereUniqueInput");
const TopicsScalarFieldEnum_1 = require("../../../../enums/TopicsScalarFieldEnum");
let FindFirstTopicsArgs = class FindFirstTopicsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereInput_1.TopicsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereInput_1.TopicsWhereInput)
], FindFirstTopicsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TopicsOrderByWithRelationInput_1.TopicsOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstTopicsArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereUniqueInput_1.TopicsWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereUniqueInput_1.TopicsWhereUniqueInput)
], FindFirstTopicsArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstTopicsArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstTopicsArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TopicsScalarFieldEnum_1.TopicsScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstTopicsArgs.prototype, "distinct", void 0);
FindFirstTopicsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstTopicsArgs);
exports.FindFirstTopicsArgs = FindFirstTopicsArgs;
