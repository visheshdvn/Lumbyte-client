"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountWhereInput_1 = require("../inputs/AdminAccountWhereInput");
let AdminAccountRelationFilter = class AdminAccountRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereInput_1.AdminAccountWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereInput_1.AdminAccountWhereInput)
], AdminAccountRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereInput_1.AdminAccountWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereInput_1.AdminAccountWhereInput)
], AdminAccountRelationFilter.prototype, "isNot", void 0);
AdminAccountRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdminAccountRelationFilter", {
        isAbstract: true
    })
], AdminAccountRelationFilter);
exports.AdminAccountRelationFilter = AdminAccountRelationFilter;
