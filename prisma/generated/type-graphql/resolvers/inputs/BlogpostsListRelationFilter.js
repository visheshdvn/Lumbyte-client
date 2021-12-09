"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsWhereInput_1 = require("../inputs/BlogpostsWhereInput");
let BlogpostsListRelationFilter = class BlogpostsListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereInput_1.BlogpostsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereInput_1.BlogpostsWhereInput)
], BlogpostsListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereInput_1.BlogpostsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereInput_1.BlogpostsWhereInput)
], BlogpostsListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereInput_1.BlogpostsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereInput_1.BlogpostsWhereInput)
], BlogpostsListRelationFilter.prototype, "none", void 0);
BlogpostsListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsListRelationFilter", {
        isAbstract: true
    })
], BlogpostsListRelationFilter);
exports.BlogpostsListRelationFilter = BlogpostsListRelationFilter;
