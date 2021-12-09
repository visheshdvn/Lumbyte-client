"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateWithoutAuthorInput_1 = require("../inputs/BlogpostsCreateWithoutAuthorInput");
const BlogpostsUpdateWithoutAuthorInput_1 = require("../inputs/BlogpostsUpdateWithoutAuthorInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsUpsertWithWhereUniqueWithoutAuthorInput = class BlogpostsUpsertWithWhereUniqueWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], BlogpostsUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsUpdateWithoutAuthorInput_1.BlogpostsUpdateWithoutAuthorInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsUpdateWithoutAuthorInput_1.BlogpostsUpdateWithoutAuthorInput)
], BlogpostsUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateWithoutAuthorInput_1.BlogpostsCreateWithoutAuthorInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateWithoutAuthorInput_1.BlogpostsCreateWithoutAuthorInput)
], BlogpostsUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
BlogpostsUpsertWithWhereUniqueWithoutAuthorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsUpsertWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], BlogpostsUpsertWithWhereUniqueWithoutAuthorInput);
exports.BlogpostsUpsertWithWhereUniqueWithoutAuthorInput = BlogpostsUpsertWithWhereUniqueWithoutAuthorInput;
