"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBlogpostsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsWhereInput_1 = require("../../../inputs/BlogpostsWhereInput");
let DeleteManyBlogpostsArgs = class DeleteManyBlogpostsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereInput_1.BlogpostsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereInput_1.BlogpostsWhereInput)
], DeleteManyBlogpostsArgs.prototype, "where", void 0);
DeleteManyBlogpostsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyBlogpostsArgs);
exports.DeleteManyBlogpostsArgs = DeleteManyBlogpostsArgs;
