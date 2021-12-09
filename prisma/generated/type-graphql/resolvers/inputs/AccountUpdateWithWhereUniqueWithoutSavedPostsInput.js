"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateWithWhereUniqueWithoutSavedPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountUpdateWithoutSavedPostsInput_1 = require("../inputs/AccountUpdateWithoutSavedPostsInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountUpdateWithWhereUniqueWithoutSavedPostsInput = class AccountUpdateWithWhereUniqueWithoutSavedPostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], AccountUpdateWithWhereUniqueWithoutSavedPostsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpdateWithoutSavedPostsInput_1.AccountUpdateWithoutSavedPostsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpdateWithoutSavedPostsInput_1.AccountUpdateWithoutSavedPostsInput)
], AccountUpdateWithWhereUniqueWithoutSavedPostsInput.prototype, "data", void 0);
AccountUpdateWithWhereUniqueWithoutSavedPostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountUpdateWithWhereUniqueWithoutSavedPostsInput", {
        isAbstract: true
    })
], AccountUpdateWithWhereUniqueWithoutSavedPostsInput);
exports.AccountUpdateWithWhereUniqueWithoutSavedPostsInput = AccountUpdateWithWhereUniqueWithoutSavedPostsInput;
