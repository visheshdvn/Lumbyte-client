"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAdminAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountUpdateManyMutationInput_1 = require("../../../inputs/AdminAccountUpdateManyMutationInput");
const AdminAccountWhereInput_1 = require("../../../inputs/AdminAccountWhereInput");
let UpdateManyAdminAccountArgs = class UpdateManyAdminAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountUpdateManyMutationInput_1.AdminAccountUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountUpdateManyMutationInput_1.AdminAccountUpdateManyMutationInput)
], UpdateManyAdminAccountArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereInput_1.AdminAccountWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereInput_1.AdminAccountWhereInput)
], UpdateManyAdminAccountArgs.prototype, "where", void 0);
UpdateManyAdminAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyAdminAccountArgs);
exports.UpdateManyAdminAccountArgs = UpdateManyAdminAccountArgs;
