"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBlogpostsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateManyInput_1 = require("../../../inputs/BlogpostsCreateManyInput");
let CreateManyBlogpostsArgs = class CreateManyBlogpostsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateManyInput_1.BlogpostsCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyBlogpostsArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyBlogpostsArgs.prototype, "skipDuplicates", void 0);
CreateManyBlogpostsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyBlogpostsArgs);
exports.CreateManyBlogpostsArgs = CreateManyBlogpostsArgs;
