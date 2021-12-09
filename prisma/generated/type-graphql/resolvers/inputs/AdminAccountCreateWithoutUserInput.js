"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AdminAccountCreateWithoutUserInput = class AdminAccountCreateWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdminAccountCreateWithoutUserInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdminAccountCreateWithoutUserInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdminAccountCreateWithoutUserInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdminAccountCreateWithoutUserInput.prototype, "restricted", void 0);
AdminAccountCreateWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdminAccountCreateWithoutUserInput", {
        isAbstract: true
    })
], AdminAccountCreateWithoutUserInput);
exports.AdminAccountCreateWithoutUserInput = AdminAccountCreateWithoutUserInput;
