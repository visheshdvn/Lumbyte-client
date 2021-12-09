"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutAdminAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutAdminAccountInput_1 = require("../inputs/UserCreateWithoutAdminAccountInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutAdminAccountInput = class UserCreateOrConnectWithoutAdminAccountInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutAdminAccountInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAdminAccountInput_1.UserCreateWithoutAdminAccountInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAdminAccountInput_1.UserCreateWithoutAdminAccountInput)
], UserCreateOrConnectWithoutAdminAccountInput.prototype, "create", void 0);
UserCreateOrConnectWithoutAdminAccountInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutAdminAccountInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutAdminAccountInput);
exports.UserCreateOrConnectWithoutAdminAccountInput = UserCreateOrConnectWithoutAdminAccountInput;
