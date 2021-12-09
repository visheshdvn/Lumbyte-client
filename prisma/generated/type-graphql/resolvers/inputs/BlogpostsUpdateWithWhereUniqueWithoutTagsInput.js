"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsUpdateWithWhereUniqueWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsUpdateWithoutTagsInput_1 = require("../inputs/BlogpostsUpdateWithoutTagsInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsUpdateWithWhereUniqueWithoutTagsInput = class BlogpostsUpdateWithWhereUniqueWithoutTagsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], BlogpostsUpdateWithWhereUniqueWithoutTagsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsUpdateWithoutTagsInput_1.BlogpostsUpdateWithoutTagsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsUpdateWithoutTagsInput_1.BlogpostsUpdateWithoutTagsInput)
], BlogpostsUpdateWithWhereUniqueWithoutTagsInput.prototype, "data", void 0);
BlogpostsUpdateWithWhereUniqueWithoutTagsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsUpdateWithWhereUniqueWithoutTagsInput", {
        isAbstract: true
    })
], BlogpostsUpdateWithWhereUniqueWithoutTagsInput);
exports.BlogpostsUpdateWithWhereUniqueWithoutTagsInput = BlogpostsUpdateWithWhereUniqueWithoutTagsInput;
