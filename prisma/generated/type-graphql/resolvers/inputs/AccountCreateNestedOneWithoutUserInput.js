"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateNestedOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateOrConnectWithoutUserInput_1 = require("../inputs/AccountCreateOrConnectWithoutUserInput");
const AccountCreateWithoutUserInput_1 = require("../inputs/AccountCreateWithoutUserInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountCreateNestedOneWithoutUserInput = class AccountCreateNestedOneWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateWithoutUserInput_1.AccountCreateWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateWithoutUserInput_1.AccountCreateWithoutUserInput)
], AccountCreateNestedOneWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutUserInput_1.AccountCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateOrConnectWithoutUserInput_1.AccountCreateOrConnectWithoutUserInput)
], AccountCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], AccountCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
AccountCreateNestedOneWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountCreateNestedOneWithoutUserInput", {
        isAbstract: true
    })
], AccountCreateNestedOneWithoutUserInput);
exports.AccountCreateNestedOneWithoutUserInput = AccountCreateNestedOneWithoutUserInput;
