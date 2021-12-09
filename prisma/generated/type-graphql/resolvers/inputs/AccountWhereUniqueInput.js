"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AccountWhereUniqueInput = class AccountWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountWhereUniqueInput.prototype, "userId", void 0);
AccountWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountWhereUniqueInput", {
        isAbstract: true
    })
], AccountWhereUniqueInput);
exports.AccountWhereUniqueInput = AccountWhereUniqueInput;
