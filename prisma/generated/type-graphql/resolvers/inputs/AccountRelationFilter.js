"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountWhereInput_1 = require("../inputs/AccountWhereInput");
let AccountRelationFilter = class AccountRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereInput_1.AccountWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereInput_1.AccountWhereInput)
], AccountRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereInput_1.AccountWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereInput_1.AccountWhereInput)
], AccountRelationFilter.prototype, "isNot", void 0);
AccountRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountRelationFilter", {
        isAbstract: true
    })
], AccountRelationFilter);
exports.AccountRelationFilter = AccountRelationFilter;
