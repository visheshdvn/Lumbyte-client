"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCountAggregate_1 = require("../outputs/AccountCountAggregate");
const AccountMaxAggregate_1 = require("../outputs/AccountMaxAggregate");
const AccountMinAggregate_1 = require("../outputs/AccountMinAggregate");
let AccountGroupBy = class AccountGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountGroupBy.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountGroupBy.prototype, "facebook", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountGroupBy.prototype, "twitter", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountGroupBy.prototype, "instagram", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountGroupBy.prototype, "linkedin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountGroupBy.prototype, "github", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountGroupBy.prototype, "behance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountGroupBy.prototype, "pintrest", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountGroupBy.prototype, "eyeem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountGroupBy.prototype, "px365", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountGroupBy.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AccountGroupBy.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AccountGroupBy.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AccountGroupBy.prototype, "disabled", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCountAggregate_1.AccountCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCountAggregate_1.AccountCountAggregate)
], AccountGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountMinAggregate_1.AccountMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountMinAggregate_1.AccountMinAggregate)
], AccountGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountMaxAggregate_1.AccountMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountMaxAggregate_1.AccountMaxAggregate)
], AccountGroupBy.prototype, "_max", void 0);
AccountGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AccountGroupBy", {
        isAbstract: true
    })
], AccountGroupBy);
exports.AccountGroupBy = AccountGroupBy;
