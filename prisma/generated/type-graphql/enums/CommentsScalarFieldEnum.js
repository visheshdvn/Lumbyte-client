"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var CommentsScalarFieldEnum;
(function (CommentsScalarFieldEnum) {
    CommentsScalarFieldEnum["id"] = "id";
    CommentsScalarFieldEnum["content"] = "content";
    CommentsScalarFieldEnum["created_at"] = "created_at";
    CommentsScalarFieldEnum["upadted_at"] = "upadted_at";
})(CommentsScalarFieldEnum = exports.CommentsScalarFieldEnum || (exports.CommentsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CommentsScalarFieldEnum, {
    name: "CommentsScalarFieldEnum",
    description: undefined,
});
