"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateOrConnectWithoutSavedPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateWithoutSavedPostsInput_1 = require("../inputs/AccountCreateWithoutSavedPostsInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountCreateOrConnectWithoutSavedPostsInput = class AccountCreateOrConnectWithoutSavedPostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], AccountCreateOrConnectWithoutSavedPostsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateWithoutSavedPostsInput_1.AccountCreateWithoutSavedPostsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateWithoutSavedPostsInput_1.AccountCreateWithoutSavedPostsInput)
], AccountCreateOrConnectWithoutSavedPostsInput.prototype, "create", void 0);
AccountCreateOrConnectWithoutSavedPostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountCreateOrConnectWithoutSavedPostsInput", {
        isAbstract: true
    })
], AccountCreateOrConnectWithoutSavedPostsInput);
exports.AccountCreateOrConnectWithoutSavedPostsInput = AccountCreateOrConnectWithoutSavedPostsInput;
