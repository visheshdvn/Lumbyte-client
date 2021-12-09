"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountAvgOrderByAggregateInput_1 = require("../inputs/AdminAccountAvgOrderByAggregateInput");
const AdminAccountCountOrderByAggregateInput_1 = require("../inputs/AdminAccountCountOrderByAggregateInput");
const AdminAccountMaxOrderByAggregateInput_1 = require("../inputs/AdminAccountMaxOrderByAggregateInput");
const AdminAccountMinOrderByAggregateInput_1 = require("../inputs/AdminAccountMinOrderByAggregateInput");
const AdminAccountSumOrderByAggregateInput_1 = require("../inputs/AdminAccountSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AdminAccountOrderByWithAggregationInput = class AdminAccountOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdminAccountOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdminAccountOrderByWithAggregationInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdminAccountOrderByWithAggregationInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdminAccountOrderByWithAggregationInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdminAccountOrderByWithAggregationInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdminAccountOrderByWithAggregationInput.prototype, "restricted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountCountOrderByAggregateInput_1.AdminAccountCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountCountOrderByAggregateInput_1.AdminAccountCountOrderByAggregateInput)
], AdminAccountOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountAvgOrderByAggregateInput_1.AdminAccountAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountAvgOrderByAggregateInput_1.AdminAccountAvgOrderByAggregateInput)
], AdminAccountOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountMaxOrderByAggregateInput_1.AdminAccountMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountMaxOrderByAggregateInput_1.AdminAccountMaxOrderByAggregateInput)
], AdminAccountOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountMinOrderByAggregateInput_1.AdminAccountMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountMinOrderByAggregateInput_1.AdminAccountMinOrderByAggregateInput)
], AdminAccountOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountSumOrderByAggregateInput_1.AdminAccountSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountSumOrderByAggregateInput_1.AdminAccountSumOrderByAggregateInput)
], AdminAccountOrderByWithAggregationInput.prototype, "_sum", void 0);
AdminAccountOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdminAccountOrderByWithAggregationInput", {
        isAbstract: true
    })
], AdminAccountOrderByWithAggregationInput);
exports.AdminAccountOrderByWithAggregationInput = AdminAccountOrderByWithAggregationInput;
