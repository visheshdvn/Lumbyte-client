"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAdminAccount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountAvgAggregate_1 = require("../outputs/AdminAccountAvgAggregate");
const AdminAccountCountAggregate_1 = require("../outputs/AdminAccountCountAggregate");
const AdminAccountMaxAggregate_1 = require("../outputs/AdminAccountMaxAggregate");
const AdminAccountMinAggregate_1 = require("../outputs/AdminAccountMinAggregate");
const AdminAccountSumAggregate_1 = require("../outputs/AdminAccountSumAggregate");
let AggregateAdminAccount = class AggregateAdminAccount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountCountAggregate_1.AdminAccountCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountCountAggregate_1.AdminAccountCountAggregate)
], AggregateAdminAccount.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountAvgAggregate_1.AdminAccountAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountAvgAggregate_1.AdminAccountAvgAggregate)
], AggregateAdminAccount.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountSumAggregate_1.AdminAccountSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountSumAggregate_1.AdminAccountSumAggregate)
], AggregateAdminAccount.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountMinAggregate_1.AdminAccountMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountMinAggregate_1.AdminAccountMinAggregate)
], AggregateAdminAccount.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountMaxAggregate_1.AdminAccountMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountMaxAggregate_1.AdminAccountMaxAggregate)
], AggregateAdminAccount.prototype, "_max", void 0);
AggregateAdminAccount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateAdminAccount", {
        isAbstract: true
    })
], AggregateAdminAccount);
exports.AggregateAdminAccount = AggregateAdminAccount;
