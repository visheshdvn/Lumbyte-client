"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCountOrderByAggregateInput_1 = require("../inputs/AccountCountOrderByAggregateInput");
const AccountMaxOrderByAggregateInput_1 = require("../inputs/AccountMaxOrderByAggregateInput");
const AccountMinOrderByAggregateInput_1 = require("../inputs/AccountMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AccountOrderByWithAggregationInput = class AccountOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "facebook", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "twitter", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "instagram", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "linkedin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "github", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "behance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "pintrest", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "eyeem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "px365", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "disabled", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCountOrderByAggregateInput_1.AccountCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCountOrderByAggregateInput_1.AccountCountOrderByAggregateInput)
], AccountOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountMaxOrderByAggregateInput_1.AccountMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountMaxOrderByAggregateInput_1.AccountMaxOrderByAggregateInput)
], AccountOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountMinOrderByAggregateInput_1.AccountMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountMinOrderByAggregateInput_1.AccountMinOrderByAggregateInput)
], AccountOrderByWithAggregationInput.prototype, "_min", void 0);
AccountOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountOrderByWithAggregationInput", {
        isAbstract: true
    })
], AccountOrderByWithAggregationInput);
exports.AccountOrderByWithAggregationInput = AccountOrderByWithAggregationInput;
