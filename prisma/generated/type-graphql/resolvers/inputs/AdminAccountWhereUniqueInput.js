"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AdminAccountWhereUniqueInput = class AdminAccountWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AdminAccountWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdminAccountWhereUniqueInput.prototype, "userId", void 0);
AdminAccountWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdminAccountWhereUniqueInput", {
        isAbstract: true
    })
], AdminAccountWhereUniqueInput);
exports.AdminAccountWhereUniqueInput = AdminAccountWhereUniqueInput;
