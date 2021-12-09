"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBlogpostsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsWhereUniqueInput_1 = require("../../../inputs/BlogpostsWhereUniqueInput");
let FindUniqueBlogpostsArgs = class FindUniqueBlogpostsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], FindUniqueBlogpostsArgs.prototype, "where", void 0);
FindUniqueBlogpostsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueBlogpostsArgs);
exports.FindUniqueBlogpostsArgs = FindUniqueBlogpostsArgs;
