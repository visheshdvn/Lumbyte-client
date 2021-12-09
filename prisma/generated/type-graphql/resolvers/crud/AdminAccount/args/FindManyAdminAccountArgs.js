"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAdminAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountOrderByWithRelationInput_1 = require("../../../inputs/AdminAccountOrderByWithRelationInput");
const AdminAccountWhereInput_1 = require("../../../inputs/AdminAccountWhereInput");
const AdminAccountWhereUniqueInput_1 = require("../../../inputs/AdminAccountWhereUniqueInput");
const AdminAccountScalarFieldEnum_1 = require("../../../../enums/AdminAccountScalarFieldEnum");
let FindManyAdminAccountArgs = class FindManyAdminAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereInput_1.AdminAccountWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereInput_1.AdminAccountWhereInput)
], FindManyAdminAccountArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdminAccountOrderByWithRelationInput_1.AdminAccountOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyAdminAccountArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput)
], FindManyAdminAccountArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyAdminAccountArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyAdminAccountArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdminAccountScalarFieldEnum_1.AdminAccountScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyAdminAccountArgs.prototype, "distinct", void 0);
FindManyAdminAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindManyAdminAccountArgs);
exports.FindManyAdminAccountArgs = FindManyAdminAccountArgs;
