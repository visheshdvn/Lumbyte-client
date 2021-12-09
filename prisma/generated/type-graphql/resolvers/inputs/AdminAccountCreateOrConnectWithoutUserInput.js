"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountCreateWithoutUserInput_1 = require("../inputs/AdminAccountCreateWithoutUserInput");
const AdminAccountWhereUniqueInput_1 = require("../inputs/AdminAccountWhereUniqueInput");
let AdminAccountCreateOrConnectWithoutUserInput = class AdminAccountCreateOrConnectWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput)
], AdminAccountCreateOrConnectWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountCreateWithoutUserInput_1.AdminAccountCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountCreateWithoutUserInput_1.AdminAccountCreateWithoutUserInput)
], AdminAccountCreateOrConnectWithoutUserInput.prototype, "create", void 0);
AdminAccountCreateOrConnectWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdminAccountCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], AdminAccountCreateOrConnectWithoutUserInput);
exports.AdminAccountCreateOrConnectWithoutUserInput = AdminAccountCreateOrConnectWithoutUserInput;
