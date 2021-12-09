"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBlogpostsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsUpdateManyMutationInput_1 = require("../../../inputs/BlogpostsUpdateManyMutationInput");
const BlogpostsWhereInput_1 = require("../../../inputs/BlogpostsWhereInput");
let UpdateManyBlogpostsArgs = class UpdateManyBlogpostsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsUpdateManyMutationInput_1.BlogpostsUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsUpdateManyMutationInput_1.BlogpostsUpdateManyMutationInput)
], UpdateManyBlogpostsArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereInput_1.BlogpostsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereInput_1.BlogpostsWhereInput)
], UpdateManyBlogpostsArgs.prototype, "where", void 0);
UpdateManyBlogpostsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyBlogpostsArgs);
exports.UpdateManyBlogpostsArgs = UpdateManyBlogpostsArgs;
