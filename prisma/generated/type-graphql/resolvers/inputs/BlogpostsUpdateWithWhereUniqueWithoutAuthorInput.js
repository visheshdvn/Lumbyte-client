"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsUpdateWithoutAuthorInput_1 = require("../inputs/BlogpostsUpdateWithoutAuthorInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsUpdateWithWhereUniqueWithoutAuthorInput = class BlogpostsUpdateWithWhereUniqueWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], BlogpostsUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsUpdateWithoutAuthorInput_1.BlogpostsUpdateWithoutAuthorInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsUpdateWithoutAuthorInput_1.BlogpostsUpdateWithoutAuthorInput)
], BlogpostsUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
BlogpostsUpdateWithWhereUniqueWithoutAuthorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsUpdateWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], BlogpostsUpdateWithWhereUniqueWithoutAuthorInput);
exports.BlogpostsUpdateWithWhereUniqueWithoutAuthorInput = BlogpostsUpdateWithWhereUniqueWithoutAuthorInput;
