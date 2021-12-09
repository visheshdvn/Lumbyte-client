"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsUpdateWithWhereUniqueWithoutTopicsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsUpdateWithoutTopicsInput_1 = require("../inputs/BlogpostsUpdateWithoutTopicsInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsUpdateWithWhereUniqueWithoutTopicsInput = class BlogpostsUpdateWithWhereUniqueWithoutTopicsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], BlogpostsUpdateWithWhereUniqueWithoutTopicsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsUpdateWithoutTopicsInput_1.BlogpostsUpdateWithoutTopicsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsUpdateWithoutTopicsInput_1.BlogpostsUpdateWithoutTopicsInput)
], BlogpostsUpdateWithWhereUniqueWithoutTopicsInput.prototype, "data", void 0);
BlogpostsUpdateWithWhereUniqueWithoutTopicsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsUpdateWithWhereUniqueWithoutTopicsInput", {
        isAbstract: true
    })
], BlogpostsUpdateWithWhereUniqueWithoutTopicsInput);
exports.BlogpostsUpdateWithWhereUniqueWithoutTopicsInput = BlogpostsUpdateWithWhereUniqueWithoutTopicsInput;
