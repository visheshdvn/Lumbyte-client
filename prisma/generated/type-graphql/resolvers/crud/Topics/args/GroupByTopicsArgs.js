"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTopicsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsOrderByWithAggregationInput_1 = require("../../../inputs/TopicsOrderByWithAggregationInput");
const TopicsScalarWhereWithAggregatesInput_1 = require("../../../inputs/TopicsScalarWhereWithAggregatesInput");
const TopicsWhereInput_1 = require("../../../inputs/TopicsWhereInput");
const TopicsScalarFieldEnum_1 = require("../../../../enums/TopicsScalarFieldEnum");
let GroupByTopicsArgs = class GroupByTopicsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereInput_1.TopicsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereInput_1.TopicsWhereInput)
], GroupByTopicsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TopicsOrderByWithAggregationInput_1.TopicsOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByTopicsArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TopicsScalarFieldEnum_1.TopicsScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByTopicsArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsScalarWhereWithAggregatesInput_1.TopicsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsScalarWhereWithAggregatesInput_1.TopicsScalarWhereWithAggregatesInput)
], GroupByTopicsArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByTopicsArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByTopicsArgs.prototype, "skip", void 0);
GroupByTopicsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByTopicsArgs);
exports.GroupByTopicsArgs = GroupByTopicsArgs;
