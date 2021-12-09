"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateManyWithWhereWithoutSavedPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountScalarWhereInput_1 = require("../inputs/AccountScalarWhereInput");
const AccountUpdateManyMutationInput_1 = require("../inputs/AccountUpdateManyMutationInput");
let AccountUpdateManyWithWhereWithoutSavedPostsInput = class AccountUpdateManyWithWhereWithoutSavedPostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountScalarWhereInput_1.AccountScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountScalarWhereInput_1.AccountScalarWhereInput)
], AccountUpdateManyWithWhereWithoutSavedPostsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpdateManyMutationInput_1.AccountUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpdateManyMutationInput_1.AccountUpdateManyMutationInput)
], AccountUpdateManyWithWhereWithoutSavedPostsInput.prototype, "data", void 0);
AccountUpdateManyWithWhereWithoutSavedPostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountUpdateManyWithWhereWithoutSavedPostsInput", {
        isAbstract: true
    })
], AccountUpdateManyWithWhereWithoutSavedPostsInput);
exports.AccountUpdateManyWithWhereWithoutSavedPostsInput = AccountUpdateManyWithWhereWithoutSavedPostsInput;
