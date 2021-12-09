"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAdminAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountWhereInput_1 = require("../../../inputs/AdminAccountWhereInput");
let DeleteManyAdminAccountArgs = class DeleteManyAdminAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereInput_1.AdminAccountWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereInput_1.AdminAccountWhereInput)
], DeleteManyAdminAccountArgs.prototype, "where", void 0);
DeleteManyAdminAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyAdminAccountArgs);
exports.DeleteManyAdminAccountArgs = DeleteManyAdminAccountArgs;
