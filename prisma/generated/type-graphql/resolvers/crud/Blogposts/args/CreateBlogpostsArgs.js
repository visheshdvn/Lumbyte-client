"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBlogpostsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateInput_1 = require("../../../inputs/BlogpostsCreateInput");
let CreateBlogpostsArgs = class CreateBlogpostsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateInput_1.BlogpostsCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateInput_1.BlogpostsCreateInput)
], CreateBlogpostsArgs.prototype, "data", void 0);
CreateBlogpostsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateBlogpostsArgs);
exports.CreateBlogpostsArgs = CreateBlogpostsArgs;
