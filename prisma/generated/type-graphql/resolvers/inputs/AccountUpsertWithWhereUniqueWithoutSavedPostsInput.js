"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpsertWithWhereUniqueWithoutSavedPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateWithoutSavedPostsInput_1 = require("../inputs/AccountCreateWithoutSavedPostsInput");
const AccountUpdateWithoutSavedPostsInput_1 = require("../inputs/AccountUpdateWithoutSavedPostsInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountUpsertWithWhereUniqueWithoutSavedPostsInput = class AccountUpsertWithWhereUniqueWithoutSavedPostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], AccountUpsertWithWhereUniqueWithoutSavedPostsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpdateWithoutSavedPostsInput_1.AccountUpdateWithoutSavedPostsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpdateWithoutSavedPostsInput_1.AccountUpdateWithoutSavedPostsInput)
], AccountUpsertWithWhereUniqueWithoutSavedPostsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateWithoutSavedPostsInput_1.AccountCreateWithoutSavedPostsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateWithoutSavedPostsInput_1.AccountCreateWithoutSavedPostsInput)
], AccountUpsertWithWhereUniqueWithoutSavedPostsInput.prototype, "create", void 0);
AccountUpsertWithWhereUniqueWithoutSavedPostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountUpsertWithWhereUniqueWithoutSavedPostsInput", {
        isAbstract: true
    })
], AccountUpsertWithWhereUniqueWithoutSavedPostsInput);
exports.AccountUpsertWithWhereUniqueWithoutSavedPostsInput = AccountUpsertWithWhereUniqueWithoutSavedPostsInput;
