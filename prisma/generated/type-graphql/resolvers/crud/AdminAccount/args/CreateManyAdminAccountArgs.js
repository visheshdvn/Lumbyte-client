"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAdminAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccountCreateManyInput_1 = require("../../../inputs/AdminAccountCreateManyInput");
let CreateManyAdminAccountArgs = class CreateManyAdminAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdminAccountCreateManyInput_1.AdminAccountCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyAdminAccountArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyAdminAccountArgs.prototype, "skipDuplicates", void 0);
CreateManyAdminAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyAdminAccountArgs);
exports.CreateManyAdminAccountArgs = CreateManyAdminAccountArgs;
