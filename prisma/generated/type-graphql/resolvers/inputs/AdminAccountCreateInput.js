"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateNestedOneWithoutAdminAccountInput_1 = require("../inputs/UserCreateNestedOneWithoutAdminAccountInput");
let AdminAccountCreateInput = class AdminAccountCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdminAccountCreateInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdminAccountCreateInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdminAccountCreateInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdminAccountCreateInput.prototype, "restricted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAdminAccountInput_1.UserCreateNestedOneWithoutAdminAccountInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutAdminAccountInput_1.UserCreateNestedOneWithoutAdminAccountInput)
], AdminAccountCreateInput.prototype, "user", void 0);
AdminAccountCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdminAccountCreateInput", {
        isAbstract: true
    })
], AdminAccountCreateInput);
exports.AdminAccountCreateInput = AdminAccountCreateInput;
