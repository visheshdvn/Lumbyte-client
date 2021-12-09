"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AdminAccountAvgOrderByAggregateInput = class AdminAccountAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdminAccountAvgOrderByAggregateInput.prototype, "id", void 0);
AdminAccountAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdminAccountAvgOrderByAggregateInput", {
        isAbstract: true
    })
], AdminAccountAvgOrderByAggregateInput);
exports.AdminAccountAvgOrderByAggregateInput = AdminAccountAvgOrderByAggregateInput;
