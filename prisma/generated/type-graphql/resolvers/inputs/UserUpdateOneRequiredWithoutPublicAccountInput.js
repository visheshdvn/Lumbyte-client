"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutPublicAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutPublicAccountInput_1 = require("../inputs/UserCreateOrConnectWithoutPublicAccountInput");
const UserCreateWithoutPublicAccountInput_1 = require("../inputs/UserCreateWithoutPublicAccountInput");
const UserUpdateWithoutPublicAccountInput_1 = require("../inputs/UserUpdateWithoutPublicAccountInput");
const UserUpsertWithoutPublicAccountInput_1 = require("../inputs/UserUpsertWithoutPublicAccountInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutPublicAccountInput = class UserUpdateOneRequiredWithoutPublicAccountInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutPublicAccountInput_1.UserCreateWithoutPublicAccountInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutPublicAccountInput_1.UserCreateWithoutPublicAccountInput)
], UserUpdateOneRequiredWithoutPublicAccountInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPublicAccountInput_1.UserCreateOrConnectWithoutPublicAccountInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutPublicAccountInput_1.UserCreateOrConnectWithoutPublicAccountInput)
], UserUpdateOneRequiredWithoutPublicAccountInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutPublicAccountInput_1.UserUpsertWithoutPublicAccountInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutPublicAccountInput_1.UserUpsertWithoutPublicAccountInput)
], UserUpdateOneRequiredWithoutPublicAccountInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutPublicAccountInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutPublicAccountInput_1.UserUpdateWithoutPublicAccountInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutPublicAccountInput_1.UserUpdateWithoutPublicAccountInput)
], UserUpdateOneRequiredWithoutPublicAccountInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutPublicAccountInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPublicAccountInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutPublicAccountInput);
exports.UserUpdateOneRequiredWithoutPublicAccountInput = UserUpdateOneRequiredWithoutPublicAccountInput;
