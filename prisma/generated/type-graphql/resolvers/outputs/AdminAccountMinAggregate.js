"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AdminAccountMinAggregate = class AdminAccountMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AdminAccountMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdminAccountMinAggregate.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdminAccountMinAggregate.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdminAccountMinAggregate.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdminAccountMinAggregate.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdminAccountMinAggregate.prototype, "restricted", void 0);
AdminAccountMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AdminAccountMinAggregate", {
        isAbstract: true
    })
], AdminAccountMinAggregate);
exports.AdminAccountMinAggregate = AdminAccountMinAggregate;
