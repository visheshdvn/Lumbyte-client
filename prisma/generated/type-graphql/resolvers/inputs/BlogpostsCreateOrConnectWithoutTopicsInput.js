"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCreateOrConnectWithoutTopicsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateWithoutTopicsInput_1 = require("../inputs/BlogpostsCreateWithoutTopicsInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsCreateOrConnectWithoutTopicsInput = class BlogpostsCreateOrConnectWithoutTopicsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], BlogpostsCreateOrConnectWithoutTopicsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateWithoutTopicsInput_1.BlogpostsCreateWithoutTopicsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateWithoutTopicsInput_1.BlogpostsCreateWithoutTopicsInput)
], BlogpostsCreateOrConnectWithoutTopicsInput.prototype, "create", void 0);
BlogpostsCreateOrConnectWithoutTopicsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsCreateOrConnectWithoutTopicsInput", {
        isAbstract: true
    })
], BlogpostsCreateOrConnectWithoutTopicsInput);
exports.BlogpostsCreateOrConnectWithoutTopicsInput = BlogpostsCreateOrConnectWithoutTopicsInput;
