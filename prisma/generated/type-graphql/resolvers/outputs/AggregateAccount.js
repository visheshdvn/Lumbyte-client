"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAccount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCountAggregate_1 = require("../outputs/AccountCountAggregate");
const AccountMaxAggregate_1 = require("../outputs/AccountMaxAggregate");
const AccountMinAggregate_1 = require("../outputs/AccountMinAggregate");
let AggregateAccount = class AggregateAccount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCountAggregate_1.AccountCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCountAggregate_1.AccountCountAggregate)
], AggregateAccount.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountMinAggregate_1.AccountMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountMinAggregate_1.AccountMinAggregate)
], AggregateAccount.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountMaxAggregate_1.AccountMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountMaxAggregate_1.AccountMaxAggregate)
], AggregateAccount.prototype, "_max", void 0);
AggregateAccount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateAccount", {
        isAbstract: true
    })
], AggregateAccount);
exports.AggregateAccount = AggregateAccount;
