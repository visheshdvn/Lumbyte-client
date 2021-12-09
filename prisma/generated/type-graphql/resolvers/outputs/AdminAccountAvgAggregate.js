"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AdminAccountAvgAggregate = class AdminAccountAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AdminAccountAvgAggregate.prototype, "id", void 0);
AdminAccountAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AdminAccountAvgAggregate", {
        isAbstract: true
    })
], AdminAccountAvgAggregate);
exports.AdminAccountAvgAggregate = AdminAccountAvgAggregate;
