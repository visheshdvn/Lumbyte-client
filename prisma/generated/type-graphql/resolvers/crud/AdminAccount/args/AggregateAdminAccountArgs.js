"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAdminAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountOrderByWithRelationInput_1 = require("../../../inputs/AdminAccountOrderByWithRelationInput");
const AdminAccountWhereInput_1 = require("../../../inputs/AdminAccountWhereInput");
const AdminAccountWhereUniqueInput_1 = require("../../../inputs/AdminAccountWhereUniqueInput");
let AggregateAdminAccountArgs = class AggregateAdminAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereInput_1.AdminAccountWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereInput_1.AdminAccountWhereInput)
], AggregateAdminAccountArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdminAccountOrderByWithRelationInput_1.AdminAccountOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateAdminAccountArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput)
], AggregateAdminAccountArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateAdminAccountArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateAdminAccountArgs.prototype, "skip", void 0);
AggregateAdminAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateAdminAccountArgs);
exports.AggregateAdminAccountArgs = AggregateAdminAccountArgs;
