"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAdminAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountWhereUniqueInput_1 = require("../../../inputs/AdminAccountWhereUniqueInput");
let FindUniqueAdminAccountArgs = class FindUniqueAdminAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput)
], FindUniqueAdminAccountArgs.prototype, "where", void 0);
FindUniqueAdminAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueAdminAccountArgs);
exports.FindUniqueAdminAccountArgs = FindUniqueAdminAccountArgs;
