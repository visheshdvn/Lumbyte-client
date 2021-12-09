"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAdminAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutAdminAccountInput_1 = require("../inputs/UserCreateWithoutAdminAccountInput");
const UserUpdateWithoutAdminAccountInput_1 = require("../inputs/UserUpdateWithoutAdminAccountInput");
let UserUpsertWithoutAdminAccountInput = class UserUpsertWithoutAdminAccountInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutAdminAccountInput_1.UserUpdateWithoutAdminAccountInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutAdminAccountInput_1.UserUpdateWithoutAdminAccountInput)
], UserUpsertWithoutAdminAccountInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAdminAccountInput_1.UserCreateWithoutAdminAccountInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAdminAccountInput_1.UserCreateWithoutAdminAccountInput)
], UserUpsertWithoutAdminAccountInput.prototype, "create", void 0);
UserUpsertWithoutAdminAccountInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpsertWithoutAdminAccountInput", {
        isAbstract: true
    })
], UserUpsertWithoutAdminAccountInput);
exports.UserUpsertWithoutAdminAccountInput = UserUpsertWithoutAdminAccountInput;
