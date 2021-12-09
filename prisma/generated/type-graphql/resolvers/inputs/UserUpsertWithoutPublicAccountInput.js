"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutPublicAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutPublicAccountInput_1 = require("../inputs/UserCreateWithoutPublicAccountInput");
const UserUpdateWithoutPublicAccountInput_1 = require("../inputs/UserUpdateWithoutPublicAccountInput");
let UserUpsertWithoutPublicAccountInput = class UserUpsertWithoutPublicAccountInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutPublicAccountInput_1.UserUpdateWithoutPublicAccountInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutPublicAccountInput_1.UserUpdateWithoutPublicAccountInput)
], UserUpsertWithoutPublicAccountInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutPublicAccountInput_1.UserCreateWithoutPublicAccountInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutPublicAccountInput_1.UserCreateWithoutPublicAccountInput)
], UserUpsertWithoutPublicAccountInput.prototype, "create", void 0);
UserUpsertWithoutPublicAccountInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpsertWithoutPublicAccountInput", {
        isAbstract: true
    })
], UserUpsertWithoutPublicAccountInput);
exports.UserUpsertWithoutPublicAccountInput = UserUpsertWithoutPublicAccountInput;
