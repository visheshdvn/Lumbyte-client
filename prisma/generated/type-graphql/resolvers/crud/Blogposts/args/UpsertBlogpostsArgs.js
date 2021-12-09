"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertBlogpostsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateInput_1 = require("../../../inputs/BlogpostsCreateInput");
const BlogpostsUpdateInput_1 = require("../../../inputs/BlogpostsUpdateInput");
const BlogpostsWhereUniqueInput_1 = require("../../../inputs/BlogpostsWhereUniqueInput");
let UpsertBlogpostsArgs = class UpsertBlogpostsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], UpsertBlogpostsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateInput_1.BlogpostsCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateInput_1.BlogpostsCreateInput)
], UpsertBlogpostsArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsUpdateInput_1.BlogpostsUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsUpdateInput_1.BlogpostsUpdateInput)
], UpsertBlogpostsArgs.prototype, "update", void 0);
UpsertBlogpostsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertBlogpostsArgs);
exports.UpsertBlogpostsArgs = UpsertBlogpostsArgs;
