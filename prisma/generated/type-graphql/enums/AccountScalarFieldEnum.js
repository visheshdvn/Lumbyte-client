"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var AccountScalarFieldEnum;
(function (AccountScalarFieldEnum) {
    AccountScalarFieldEnum["id"] = "id";
    AccountScalarFieldEnum["password"] = "password";
    AccountScalarFieldEnum["facebook"] = "facebook";
    AccountScalarFieldEnum["twitter"] = "twitter";
    AccountScalarFieldEnum["instagram"] = "instagram";
    AccountScalarFieldEnum["linkedin"] = "linkedin";
    AccountScalarFieldEnum["github"] = "github";
    AccountScalarFieldEnum["behance"] = "behance";
    AccountScalarFieldEnum["pintrest"] = "pintrest";
    AccountScalarFieldEnum["eyeem"] = "eyeem";
    AccountScalarFieldEnum["px365"] = "px365";
    AccountScalarFieldEnum["userId"] = "userId";
    AccountScalarFieldEnum["created_at"] = "created_at";
    AccountScalarFieldEnum["upadted_at"] = "upadted_at";
    AccountScalarFieldEnum["disabled"] = "disabled";
})(AccountScalarFieldEnum = exports.AccountScalarFieldEnum || (exports.AccountScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AccountScalarFieldEnum, {
    name: "AccountScalarFieldEnum",
    description: undefined,
});
