"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let BlogpostsCount = class BlogpostsCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsCount.prototype, "tags", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsCount.prototype, "savedBy", void 0);
BlogpostsCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("BlogpostsCount", {
        isAbstract: true
    })
], BlogpostsCount);
exports.BlogpostsCount = BlogpostsCount;
