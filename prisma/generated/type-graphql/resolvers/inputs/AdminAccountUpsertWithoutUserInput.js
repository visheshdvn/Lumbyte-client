"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountUpsertWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountCreateWithoutUserInput_1 = require("../inputs/AdminAccountCreateWithoutUserInput");
const AdminAccountUpdateWithoutUserInput_1 = require("../inputs/AdminAccountUpdateWithoutUserInput");
let AdminAccountUpsertWithoutUserInput = class AdminAccountUpsertWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountUpdateWithoutUserInput_1.AdminAccountUpdateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountUpdateWithoutUserInput_1.AdminAccountUpdateWithoutUserInput)
], AdminAccountUpsertWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountCreateWithoutUserInput_1.AdminAccountCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountCreateWithoutUserInput_1.AdminAccountCreateWithoutUserInput)
], AdminAccountUpsertWithoutUserInput.prototype, "create", void 0);
AdminAccountUpsertWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdminAccountUpsertWithoutUserInput", {
        isAbstract: true
    })
], AdminAccountUpsertWithoutUserInput);
exports.AdminAccountUpsertWithoutUserInput = AdminAccountUpsertWithoutUserInput;
