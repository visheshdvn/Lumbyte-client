"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutAdminAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutAdminAccountInput_1 = require("../inputs/UserCreateOrConnectWithoutAdminAccountInput");
const UserCreateWithoutAdminAccountInput_1 = require("../inputs/UserCreateWithoutAdminAccountInput");
const UserUpdateWithoutAdminAccountInput_1 = require("../inputs/UserUpdateWithoutAdminAccountInput");
const UserUpsertWithoutAdminAccountInput_1 = require("../inputs/UserUpsertWithoutAdminAccountInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutAdminAccountInput = class UserUpdateOneRequiredWithoutAdminAccountInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAdminAccountInput_1.UserCreateWithoutAdminAccountInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAdminAccountInput_1.UserCreateWithoutAdminAccountInput)
], UserUpdateOneRequiredWithoutAdminAccountInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAdminAccountInput_1.UserCreateOrConnectWithoutAdminAccountInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutAdminAccountInput_1.UserCreateOrConnectWithoutAdminAccountInput)
], UserUpdateOneRequiredWithoutAdminAccountInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutAdminAccountInput_1.UserUpsertWithoutAdminAccountInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutAdminAccountInput_1.UserUpsertWithoutAdminAccountInput)
], UserUpdateOneRequiredWithoutAdminAccountInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutAdminAccountInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutAdminAccountInput_1.UserUpdateWithoutAdminAccountInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutAdminAccountInput_1.UserUpdateWithoutAdminAccountInput)
], UserUpdateOneRequiredWithoutAdminAccountInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutAdminAccountInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAdminAccountInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutAdminAccountInput);
exports.UserUpdateOneRequiredWithoutAdminAccountInput = UserUpdateOneRequiredWithoutAdminAccountInput;
