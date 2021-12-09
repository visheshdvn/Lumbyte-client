"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutPublicAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutPublicAccountInput_1 = require("../inputs/UserCreateWithoutPublicAccountInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutPublicAccountInput = class UserCreateOrConnectWithoutPublicAccountInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutPublicAccountInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutPublicAccountInput_1.UserCreateWithoutPublicAccountInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutPublicAccountInput_1.UserCreateWithoutPublicAccountInput)
], UserCreateOrConnectWithoutPublicAccountInput.prototype, "create", void 0);
UserCreateOrConnectWithoutPublicAccountInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutPublicAccountInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutPublicAccountInput);
exports.UserCreateOrConnectWithoutPublicAccountInput = UserCreateOrConnectWithoutPublicAccountInput;
