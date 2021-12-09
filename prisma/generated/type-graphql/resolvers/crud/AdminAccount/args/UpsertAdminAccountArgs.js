"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAdminAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountCreateInput_1 = require("../../../inputs/AdminAccountCreateInput");
const AdminAccountUpdateInput_1 = require("../../../inputs/AdminAccountUpdateInput");
const AdminAccountWhereUniqueInput_1 = require("../../../inputs/AdminAccountWhereUniqueInput");
let UpsertAdminAccountArgs = class UpsertAdminAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput)
], UpsertAdminAccountArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountCreateInput_1.AdminAccountCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountCreateInput_1.AdminAccountCreateInput)
], UpsertAdminAccountArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountUpdateInput_1.AdminAccountUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountUpdateInput_1.AdminAccountUpdateInput)
], UpsertAdminAccountArgs.prototype, "update", void 0);
UpsertAdminAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertAdminAccountArgs);
exports.UpsertAdminAccountArgs = UpsertAdminAccountArgs;
