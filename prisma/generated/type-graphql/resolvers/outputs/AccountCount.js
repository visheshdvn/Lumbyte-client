"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AccountCount = class AccountCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AccountCount.prototype, "savedPosts", void 0);
AccountCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AccountCount", {
        isAbstract: true
    })
], AccountCount);
exports.AccountCount = AccountCount;
