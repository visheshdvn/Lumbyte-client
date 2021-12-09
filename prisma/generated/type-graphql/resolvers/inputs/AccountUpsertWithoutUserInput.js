"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpsertWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateWithoutUserInput_1 = require("../inputs/AccountCreateWithoutUserInput");
const AccountUpdateWithoutUserInput_1 = require("../inputs/AccountUpdateWithoutUserInput");
let AccountUpsertWithoutUserInput = class AccountUpsertWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpdateWithoutUserInput_1.AccountUpdateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpdateWithoutUserInput_1.AccountUpdateWithoutUserInput)
], AccountUpsertWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateWithoutUserInput_1.AccountCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateWithoutUserInput_1.AccountCreateWithoutUserInput)
], AccountUpsertWithoutUserInput.prototype, "create", void 0);
AccountUpsertWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountUpsertWithoutUserInput", {
        isAbstract: true
    })
], AccountUpsertWithoutUserInput);
exports.AccountUpsertWithoutUserInput = AccountUpsertWithoutUserInput;
