"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountUpdateOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountCreateOrConnectWithoutUserInput_1 = require("../inputs/AdminAccountCreateOrConnectWithoutUserInput");
const AdminAccountCreateWithoutUserInput_1 = require("../inputs/AdminAccountCreateWithoutUserInput");
const AdminAccountUpdateWithoutUserInput_1 = require("../inputs/AdminAccountUpdateWithoutUserInput");
const AdminAccountUpsertWithoutUserInput_1 = require("../inputs/AdminAccountUpsertWithoutUserInput");
const AdminAccountWhereUniqueInput_1 = require("../inputs/AdminAccountWhereUniqueInput");
let AdminAccountUpdateOneWithoutUserInput = class AdminAccountUpdateOneWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountCreateWithoutUserInput_1.AdminAccountCreateWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountCreateWithoutUserInput_1.AdminAccountCreateWithoutUserInput)
], AdminAccountUpdateOneWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountCreateOrConnectWithoutUserInput_1.AdminAccountCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountCreateOrConnectWithoutUserInput_1.AdminAccountCreateOrConnectWithoutUserInput)
], AdminAccountUpdateOneWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountUpsertWithoutUserInput_1.AdminAccountUpsertWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountUpsertWithoutUserInput_1.AdminAccountUpsertWithoutUserInput)
], AdminAccountUpdateOneWithoutUserInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdminAccountUpdateOneWithoutUserInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdminAccountUpdateOneWithoutUserInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountWhereUniqueInput_1.AdminAccountWhereUniqueInput)
], AdminAccountUpdateOneWithoutUserInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdminAccountUpdateWithoutUserInput_1.AdminAccountUpdateWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdminAccountUpdateWithoutUserInput_1.AdminAccountUpdateWithoutUserInput)
], AdminAccountUpdateOneWithoutUserInput.prototype, "update", void 0);
AdminAccountUpdateOneWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdminAccountUpdateOneWithoutUserInput", {
        isAbstract: true
    })
], AdminAccountUpdateOneWithoutUserInput);
exports.AdminAccountUpdateOneWithoutUserInput = AdminAccountUpdateOneWithoutUserInput;
