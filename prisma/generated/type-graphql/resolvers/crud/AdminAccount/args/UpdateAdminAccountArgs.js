"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdminAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountUpdateInput_1 = require("../../../inputs/AdminAccountUpdateInput");
const AdminAccountWhereUniqueInput_1 = require("../../../inputs/AdminAccountWhereUniqueInput");
let UpdateAdminAccountArgs = class UpdateAdminAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountUpdateInput_1.AdminAccountUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountUpdateInput_1.AdminAccountUpdateInput)
], UpdateAdminAccountArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput)
], UpdateAdminAccountArgs.prototype, "where", void 0);
UpdateAdminAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateAdminAccountArgs);
exports.UpdateAdminAccountArgs = UpdateAdminAccountArgs;
