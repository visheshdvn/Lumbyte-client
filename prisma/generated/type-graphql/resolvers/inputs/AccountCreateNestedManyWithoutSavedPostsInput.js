"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateNestedManyWithoutSavedPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateOrConnectWithoutSavedPostsInput_1 = require("../inputs/AccountCreateOrConnectWithoutSavedPostsInput");
const AccountCreateWithoutSavedPostsInput_1 = require("../inputs/AccountCreateWithoutSavedPostsInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountCreateNestedManyWithoutSavedPostsInput = class AccountCreateNestedManyWithoutSavedPostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountCreateWithoutSavedPostsInput_1.AccountCreateWithoutSavedPostsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountCreateNestedManyWithoutSavedPostsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountCreateOrConnectWithoutSavedPostsInput_1.AccountCreateOrConnectWithoutSavedPostsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountCreateNestedManyWithoutSavedPostsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountCreateNestedManyWithoutSavedPostsInput.prototype, "connect", void 0);
AccountCreateNestedManyWithoutSavedPostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountCreateNestedManyWithoutSavedPostsInput", {
        isAbstract: true
    })
], AccountCreateNestedManyWithoutSavedPostsInput);
exports.AccountCreateNestedManyWithoutSavedPostsInput = AccountCreateNestedManyWithoutSavedPostsInput;
