"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateWithoutAuthorInput_1 = require("../inputs/BlogpostsCreateWithoutAuthorInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsCreateOrConnectWithoutAuthorInput = class BlogpostsCreateOrConnectWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], BlogpostsCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateWithoutAuthorInput_1.BlogpostsCreateWithoutAuthorInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateWithoutAuthorInput_1.BlogpostsCreateWithoutAuthorInput)
], BlogpostsCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
BlogpostsCreateOrConnectWithoutAuthorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsCreateOrConnectWithoutAuthorInput", {
        isAbstract: true
    })
], BlogpostsCreateOrConnectWithoutAuthorInput);
exports.BlogpostsCreateOrConnectWithoutAuthorInput = BlogpostsCreateOrConnectWithoutAuthorInput;
