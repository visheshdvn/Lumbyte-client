"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutAdminAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutAdminAccountInput_1 = require("../inputs/UserCreateOrConnectWithoutAdminAccountInput");
const UserCreateWithoutAdminAccountInput_1 = require("../inputs/UserCreateWithoutAdminAccountInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutAdminAccountInput = class UserCreateNestedOneWithoutAdminAccountInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAdminAccountInput_1.UserCreateWithoutAdminAccountInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAdminAccountInput_1.UserCreateWithoutAdminAccountInput)
], UserCreateNestedOneWithoutAdminAccountInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAdminAccountInput_1.UserCreateOrConnectWithoutAdminAccountInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutAdminAccountInput_1.UserCreateOrConnectWithoutAdminAccountInput)
], UserCreateNestedOneWithoutAdminAccountInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutAdminAccountInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutAdminAccountInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutAdminAccountInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutAdminAccountInput);
exports.UserCreateNestedOneWithoutAdminAccountInput = UserCreateNestedOneWithoutAdminAccountInput;
