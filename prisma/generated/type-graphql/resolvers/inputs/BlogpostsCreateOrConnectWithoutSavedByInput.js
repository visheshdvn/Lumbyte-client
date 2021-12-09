"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCreateOrConnectWithoutSavedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateWithoutSavedByInput_1 = require("../inputs/BlogpostsCreateWithoutSavedByInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsCreateOrConnectWithoutSavedByInput = class BlogpostsCreateOrConnectWithoutSavedByInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], BlogpostsCreateOrConnectWithoutSavedByInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateWithoutSavedByInput_1.BlogpostsCreateWithoutSavedByInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateWithoutSavedByInput_1.BlogpostsCreateWithoutSavedByInput)
], BlogpostsCreateOrConnectWithoutSavedByInput.prototype, "create", void 0);
BlogpostsCreateOrConnectWithoutSavedByInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsCreateOrConnectWithoutSavedByInput", {
        isAbstract: true
    })
], BlogpostsCreateOrConnectWithoutSavedByInput);
exports.BlogpostsCreateOrConnectWithoutSavedByInput = BlogpostsCreateOrConnectWithoutSavedByInput;
