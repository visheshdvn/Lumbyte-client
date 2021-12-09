"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutPublicAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutPublicAccountInput_1 = require("../inputs/UserCreateOrConnectWithoutPublicAccountInput");
const UserCreateWithoutPublicAccountInput_1 = require("../inputs/UserCreateWithoutPublicAccountInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutPublicAccountInput = class UserCreateNestedOneWithoutPublicAccountInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutPublicAccountInput_1.UserCreateWithoutPublicAccountInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutPublicAccountInput_1.UserCreateWithoutPublicAccountInput)
], UserCreateNestedOneWithoutPublicAccountInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPublicAccountInput_1.UserCreateOrConnectWithoutPublicAccountInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutPublicAccountInput_1.UserCreateOrConnectWithoutPublicAccountInput)
], UserCreateNestedOneWithoutPublicAccountInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutPublicAccountInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutPublicAccountInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutPublicAccountInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutPublicAccountInput);
exports.UserCreateNestedOneWithoutPublicAccountInput = UserCreateNestedOneWithoutPublicAccountInput;
