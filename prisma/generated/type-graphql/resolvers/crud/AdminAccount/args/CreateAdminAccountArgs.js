"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdminAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountCreateInput_1 = require("../../../inputs/AdminAccountCreateInput");
let CreateAdminAccountArgs = class CreateAdminAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountCreateInput_1.AdminAccountCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountCreateInput_1.AdminAccountCreateInput)
], CreateAdminAccountArgs.prototype, "data", void 0);
CreateAdminAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateAdminAccountArgs);
exports.CreateAdminAccountArgs = CreateAdminAccountArgs;
