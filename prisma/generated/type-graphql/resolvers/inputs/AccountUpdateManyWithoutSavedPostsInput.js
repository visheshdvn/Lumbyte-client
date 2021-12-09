"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateManyWithoutSavedPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateOrConnectWithoutSavedPostsInput_1 = require("../inputs/AccountCreateOrConnectWithoutSavedPostsInput");
const AccountCreateWithoutSavedPostsInput_1 = require("../inputs/AccountCreateWithoutSavedPostsInput");
const AccountScalarWhereInput_1 = require("../inputs/AccountScalarWhereInput");
const AccountUpdateManyWithWhereWithoutSavedPostsInput_1 = require("../inputs/AccountUpdateManyWithWhereWithoutSavedPostsInput");
const AccountUpdateWithWhereUniqueWithoutSavedPostsInput_1 = require("../inputs/AccountUpdateWithWhereUniqueWithoutSavedPostsInput");
const AccountUpsertWithWhereUniqueWithoutSavedPostsInput_1 = require("../inputs/AccountUpsertWithWhereUniqueWithoutSavedPostsInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountUpdateManyWithoutSavedPostsInput = class AccountUpdateManyWithoutSavedPostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountCreateWithoutSavedPostsInput_1.AccountCreateWithoutSavedPostsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutSavedPostsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountCreateOrConnectWithoutSavedPostsInput_1.AccountCreateOrConnectWithoutSavedPostsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutSavedPostsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountUpsertWithWhereUniqueWithoutSavedPostsInput_1.AccountUpsertWithWhereUniqueWithoutSavedPostsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutSavedPostsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutSavedPostsInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutSavedPostsInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutSavedPostsInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutSavedPostsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountUpdateWithWhereUniqueWithoutSavedPostsInput_1.AccountUpdateWithWhereUniqueWithoutSavedPostsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutSavedPostsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountUpdateManyWithWhereWithoutSavedPostsInput_1.AccountUpdateManyWithWhereWithoutSavedPostsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutSavedPostsInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountScalarWhereInput_1.AccountScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountUpdateManyWithoutSavedPostsInput.prototype, "deleteMany", void 0);
AccountUpdateManyWithoutSavedPostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountUpdateManyWithoutSavedPostsInput", {
        isAbstract: true
    })
], AccountUpdateManyWithoutSavedPostsInput);
exports.AccountUpdateManyWithoutSavedPostsInput = AccountUpdateManyWithoutSavedPostsInput;
