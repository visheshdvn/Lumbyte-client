"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsUpdateWithWhereUniqueWithoutSavedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsUpdateWithoutSavedByInput_1 = require("../inputs/BlogpostsUpdateWithoutSavedByInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsUpdateWithWhereUniqueWithoutSavedByInput = class BlogpostsUpdateWithWhereUniqueWithoutSavedByInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], BlogpostsUpdateWithWhereUniqueWithoutSavedByInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsUpdateWithoutSavedByInput_1.BlogpostsUpdateWithoutSavedByInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsUpdateWithoutSavedByInput_1.BlogpostsUpdateWithoutSavedByInput)
], BlogpostsUpdateWithWhereUniqueWithoutSavedByInput.prototype, "data", void 0);
BlogpostsUpdateWithWhereUniqueWithoutSavedByInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsUpdateWithWhereUniqueWithoutSavedByInput", {
        isAbstract: true
    })
], BlogpostsUpdateWithWhereUniqueWithoutSavedByInput);
exports.BlogpostsUpdateWithWhereUniqueWithoutSavedByInput = BlogpostsUpdateWithWhereUniqueWithoutSavedByInput;
