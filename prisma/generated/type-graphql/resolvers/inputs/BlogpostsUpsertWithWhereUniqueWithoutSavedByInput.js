"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsUpsertWithWhereUniqueWithoutSavedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateWithoutSavedByInput_1 = require("../inputs/BlogpostsCreateWithoutSavedByInput");
const BlogpostsUpdateWithoutSavedByInput_1 = require("../inputs/BlogpostsUpdateWithoutSavedByInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsUpsertWithWhereUniqueWithoutSavedByInput = class BlogpostsUpsertWithWhereUniqueWithoutSavedByInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], BlogpostsUpsertWithWhereUniqueWithoutSavedByInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsUpdateWithoutSavedByInput_1.BlogpostsUpdateWithoutSavedByInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsUpdateWithoutSavedByInput_1.BlogpostsUpdateWithoutSavedByInput)
], BlogpostsUpsertWithWhereUniqueWithoutSavedByInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateWithoutSavedByInput_1.BlogpostsCreateWithoutSavedByInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateWithoutSavedByInput_1.BlogpostsCreateWithoutSavedByInput)
], BlogpostsUpsertWithWhereUniqueWithoutSavedByInput.prototype, "create", void 0);
BlogpostsUpsertWithWhereUniqueWithoutSavedByInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsUpsertWithWhereUniqueWithoutSavedByInput", {
        isAbstract: true
    })
], BlogpostsUpsertWithWhereUniqueWithoutSavedByInput);
exports.BlogpostsUpsertWithWhereUniqueWithoutSavedByInput = BlogpostsUpsertWithWhereUniqueWithoutSavedByInput;
