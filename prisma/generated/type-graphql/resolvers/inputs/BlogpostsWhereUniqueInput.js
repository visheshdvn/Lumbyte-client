"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let BlogpostsWhereUniqueInput = class BlogpostsWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsWhereUniqueInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsWhereUniqueInput.prototype, "content", void 0);
BlogpostsWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsWhereUniqueInput", {
        isAbstract: true
    })
], BlogpostsWhereUniqueInput);
exports.BlogpostsWhereUniqueInput = BlogpostsWhereUniqueInput;
