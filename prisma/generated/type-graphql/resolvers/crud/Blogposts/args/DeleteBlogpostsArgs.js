"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBlogpostsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsWhereUniqueInput_1 = require("../../../inputs/BlogpostsWhereUniqueInput");
let DeleteBlogpostsArgs = class DeleteBlogpostsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], DeleteBlogpostsArgs.prototype, "where", void 0);
DeleteBlogpostsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteBlogpostsArgs);
exports.DeleteBlogpostsArgs = DeleteBlogpostsArgs;
