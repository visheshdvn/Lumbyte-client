"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountAvgAggregate_1 = require("../outputs/AdminAccountAvgAggregate");
const AdminAccountCountAggregate_1 = require("../outputs/AdminAccountCountAggregate");
const AdminAccountMaxAggregate_1 = require("../outputs/AdminAccountMaxAggregate");
const AdminAccountMinAggregate_1 = require("../outputs/AdminAccountMinAggregate");
const AdminAccountSumAggregate_1 = require("../outputs/AdminAccountSumAggregate");
let AdminAccountGroupBy = class AdminAccountGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AdminAccountGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdminAccountGroupBy.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdminAccountGroupBy.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdminAccountGroupBy.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdminAccountGroupBy.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdminAccountGroupBy.prototype, "restricted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountCountAggregate_1.AdminAccountCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountCountAggregate_1.AdminAccountCountAggregate)
], AdminAccountGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountAvgAggregate_1.AdminAccountAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountAvgAggregate_1.AdminAccountAvgAggregate)
], AdminAccountGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountSumAggregate_1.AdminAccountSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountSumAggregate_1.AdminAccountSumAggregate)
], AdminAccountGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountMinAggregate_1.AdminAccountMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountMinAggregate_1.AdminAccountMinAggregate)
], AdminAccountGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountMaxAggregate_1.AdminAccountMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountMaxAggregate_1.AdminAccountMaxAggregate)
], AdminAccountGroupBy.prototype, "_max", void 0);
AdminAccountGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AdminAccountGroupBy", {
        isAbstract: true
    })
], AdminAccountGroupBy);
exports.AdminAccountGroupBy = AdminAccountGroupBy;
