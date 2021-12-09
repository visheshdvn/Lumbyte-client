"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountCreateNestedOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountCreateOrConnectWithoutUserInput_1 = require("../inputs/AdminAccountCreateOrConnectWithoutUserInput");
const AdminAccountCreateWithoutUserInput_1 = require("../inputs/AdminAccountCreateWithoutUserInput");
const AdminAccountWhereUniqueInput_1 = require("../inputs/AdminAccountWhereUniqueInput");
let AdminAccountCreateNestedOneWithoutUserInput = class AdminAccountCreateNestedOneWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountCreateWithoutUserInput_1.AdminAccountCreateWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountCreateWithoutUserInput_1.AdminAccountCreateWithoutUserInput)
], AdminAccountCreateNestedOneWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountCreateOrConnectWithoutUserInput_1.AdminAccountCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountCreateOrConnectWithoutUserInput_1.AdminAccountCreateOrConnectWithoutUserInput)
], AdminAccountCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput)
], AdminAccountCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
AdminAccountCreateNestedOneWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdminAccountCreateNestedOneWithoutUserInput", {
        isAbstract: true
    })
], AdminAccountCreateNestedOneWithoutUserInput);
exports.AdminAccountCreateNestedOneWithoutUserInput = AdminAccountCreateNestedOneWithoutUserInput;
