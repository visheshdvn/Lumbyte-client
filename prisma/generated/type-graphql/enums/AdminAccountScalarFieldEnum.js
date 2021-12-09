"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var AdminAccountScalarFieldEnum;
(function (AdminAccountScalarFieldEnum) {
    AdminAccountScalarFieldEnum["id"] = "id";
    AdminAccountScalarFieldEnum["password"] = "password";
    AdminAccountScalarFieldEnum["userId"] = "userId";
    AdminAccountScalarFieldEnum["created_at"] = "created_at";
    AdminAccountScalarFieldEnum["upadted_at"] = "upadted_at";
    AdminAccountScalarFieldEnum["restricted"] = "restricted";
})(AdminAccountScalarFieldEnum = exports.AdminAccountScalarFieldEnum || (exports.AdminAccountScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AdminAccountScalarFieldEnum, {
    name: "AdminAccountScalarFieldEnum",
    description: undefined,
});
