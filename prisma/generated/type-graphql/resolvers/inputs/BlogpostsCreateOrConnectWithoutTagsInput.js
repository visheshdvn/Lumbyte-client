"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCreateOrConnectWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateWithoutTagsInput_1 = require("../inputs/BlogpostsCreateWithoutTagsInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsCreateOrConnectWithoutTagsInput = class BlogpostsCreateOrConnectWithoutTagsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], BlogpostsCreateOrConnectWithoutTagsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateWithoutTagsInput_1.BlogpostsCreateWithoutTagsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateWithoutTagsInput_1.BlogpostsCreateWithoutTagsInput)
], BlogpostsCreateOrConnectWithoutTagsInput.prototype, "create", void 0);
BlogpostsCreateOrConnectWithoutTagsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsCreateOrConnectWithoutTagsInput", {
        isAbstract: true
    })
], BlogpostsCreateOrConnectWithoutTagsInput);
exports.BlogpostsCreateOrConnectWithoutTagsInput = BlogpostsCreateOrConnectWithoutTagsInput;
