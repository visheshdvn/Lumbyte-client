"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsUpsertWithWhereUniqueWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateWithoutTagsInput_1 = require("../inputs/BlogpostsCreateWithoutTagsInput");
const BlogpostsUpdateWithoutTagsInput_1 = require("../inputs/BlogpostsUpdateWithoutTagsInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsUpsertWithWhereUniqueWithoutTagsInput = class BlogpostsUpsertWithWhereUniqueWithoutTagsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], BlogpostsUpsertWithWhereUniqueWithoutTagsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsUpdateWithoutTagsInput_1.BlogpostsUpdateWithoutTagsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsUpdateWithoutTagsInput_1.BlogpostsUpdateWithoutTagsInput)
], BlogpostsUpsertWithWhereUniqueWithoutTagsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateWithoutTagsInput_1.BlogpostsCreateWithoutTagsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateWithoutTagsInput_1.BlogpostsCreateWithoutTagsInput)
], BlogpostsUpsertWithWhereUniqueWithoutTagsInput.prototype, "create", void 0);
BlogpostsUpsertWithWhereUniqueWithoutTagsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsUpsertWithWhereUniqueWithoutTagsInput", {
        isAbstract: true
    })
], BlogpostsUpsertWithWhereUniqueWithoutTagsInput);
exports.BlogpostsUpsertWithWhereUniqueWithoutTagsInput = BlogpostsUpsertWithWhereUniqueWithoutTagsInput;
