"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsUpsertWithWhereUniqueWithoutTopicsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateWithoutTopicsInput_1 = require("../inputs/BlogpostsCreateWithoutTopicsInput");
const BlogpostsUpdateWithoutTopicsInput_1 = require("../inputs/BlogpostsUpdateWithoutTopicsInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsUpsertWithWhereUniqueWithoutTopicsInput = class BlogpostsUpsertWithWhereUniqueWithoutTopicsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], BlogpostsUpsertWithWhereUniqueWithoutTopicsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsUpdateWithoutTopicsInput_1.BlogpostsUpdateWithoutTopicsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsUpdateWithoutTopicsInput_1.BlogpostsUpdateWithoutTopicsInput)
], BlogpostsUpsertWithWhereUniqueWithoutTopicsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateWithoutTopicsInput_1.BlogpostsCreateWithoutTopicsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateWithoutTopicsInput_1.BlogpostsCreateWithoutTopicsInput)
], BlogpostsUpsertWithWhereUniqueWithoutTopicsInput.prototype, "create", void 0);
BlogpostsUpsertWithWhereUniqueWithoutTopicsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsUpsertWithWhereUniqueWithoutTopicsInput", {
        isAbstract: true
    })
], BlogpostsUpsertWithWhereUniqueWithoutTopicsInput);
exports.BlogpostsUpsertWithWhereUniqueWithoutTopicsInput = BlogpostsUpsertWithWhereUniqueWithoutTopicsInput;
