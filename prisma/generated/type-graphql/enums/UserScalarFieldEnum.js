"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["firstname"] = "firstname";
    UserScalarFieldEnum["lastname"] = "lastname";
    UserScalarFieldEnum["username"] = "username";
    UserScalarFieldEnum["about"] = "about";
    UserScalarFieldEnum["dp"] = "dp";
    UserScalarFieldEnum["dpalt"] = "dpalt";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["phone"] = "phone";
    UserScalarFieldEnum["role"] = "role";
    UserScalarFieldEnum["created_at"] = "created_at";
    UserScalarFieldEnum["upadted_at"] = "upadted_at";
    UserScalarFieldEnum["adminGrant"] = "adminGrant";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
    name: "UserScalarFieldEnum",
    description: undefined,
});
