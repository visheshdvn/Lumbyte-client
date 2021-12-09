"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAdminAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountOrderByWithAggregationInput_1 = require("../../../inputs/AdminAccountOrderByWithAggregationInput");
const AdminAccountScalarWhereWithAggregatesInput_1 = require("../../../inputs/AdminAccountScalarWhereWithAggregatesInput");
const AdminAccountWhereInput_1 = require("../../../inputs/AdminAccountWhereInput");
const AdminAccountScalarFieldEnum_1 = require("../../../../enums/AdminAccountScalarFieldEnum");
let GroupByAdminAccountArgs = class GroupByAdminAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereInput_1.AdminAccountWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereInput_1.AdminAccountWhereInput)
], GroupByAdminAccountArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdminAccountOrderByWithAggregationInput_1.AdminAccountOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByAdminAccountArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdminAccountScalarFieldEnum_1.AdminAccountScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByAdminAccountArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountScalarWhereWithAggregatesInput_1.AdminAccountScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountScalarWhereWithAggregatesInput_1.AdminAccountScalarWhereWithAggregatesInput)
], GroupByAdminAccountArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByAdminAccountArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByAdminAccountArgs.prototype, "skip", void 0);
GroupByAdminAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByAdminAccountArgs);
exports.GroupByAdminAccountArgs = GroupByAdminAccountArgs;
