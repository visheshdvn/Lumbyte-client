"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsSavedByArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountOrderByWithRelationInput_1 = require("../../../inputs/AccountOrderByWithRelationInput");
const AccountWhereInput_1 = require("../../../inputs/AccountWhereInput");
const AccountWhereUniqueInput_1 = require("../../../inputs/AccountWhereUniqueInput");
const AccountScalarFieldEnum_1 = require("../../../../enums/AccountScalarFieldEnum");
let BlogpostsSavedByArgs = class BlogpostsSavedByArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereInput_1.AccountWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereInput_1.AccountWhereInput)
], BlogpostsSavedByArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountOrderByWithRelationInput_1.AccountOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsSavedByArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], BlogpostsSavedByArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsSavedByArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsSavedByArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountScalarFieldEnum_1.AccountScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsSavedByArgs.prototype, "distinct", void 0);
BlogpostsSavedByArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], BlogpostsSavedByArgs);
exports.BlogpostsSavedByArgs = BlogpostsSavedByArgs;
