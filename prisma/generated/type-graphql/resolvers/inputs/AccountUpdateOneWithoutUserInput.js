"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateOrConnectWithoutUserInput_1 = require("../inputs/AccountCreateOrConnectWithoutUserInput");
const AccountCreateWithoutUserInput_1 = require("../inputs/AccountCreateWithoutUserInput");
const AccountUpdateWithoutUserInput_1 = require("../inputs/AccountUpdateWithoutUserInput");
const AccountUpsertWithoutUserInput_1 = require("../inputs/AccountUpsertWithoutUserInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountUpdateOneWithoutUserInput = class AccountUpdateOneWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateWithoutUserInput_1.AccountCreateWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateWithoutUserInput_1.AccountCreateWithoutUserInput)
], AccountUpdateOneWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutUserInput_1.AccountCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateOrConnectWithoutUserInput_1.AccountCreateOrConnectWithoutUserInput)
], AccountUpdateOneWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpsertWithoutUserInput_1.AccountUpsertWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpsertWithoutUserInput_1.AccountUpsertWithoutUserInput)
], AccountUpdateOneWithoutUserInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AccountUpdateOneWithoutUserInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AccountUpdateOneWithoutUserInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], AccountUpdateOneWithoutUserInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpdateWithoutUserInput_1.AccountUpdateWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpdateWithoutUserInput_1.AccountUpdateWithoutUserInput)
], AccountUpdateOneWithoutUserInput.prototype, "update", void 0);
AccountUpdateOneWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountUpdateOneWithoutUserInput", {
        isAbstract: true
    })
], AccountUpdateOneWithoutUserInput);
exports.AccountUpdateOneWithoutUserInput = AccountUpdateOneWithoutUserInput;
