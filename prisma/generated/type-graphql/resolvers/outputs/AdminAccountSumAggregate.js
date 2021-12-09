"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AdminAccountSumAggregate = class AdminAccountSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AdminAccountSumAggregate.prototype, "id", void 0);
AdminAccountSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AdminAccountSumAggregate", {
        isAbstract: true
    })
], AdminAccountSumAggregate);
exports.AdminAccountSumAggregate = AdminAccountSumAggregate;
