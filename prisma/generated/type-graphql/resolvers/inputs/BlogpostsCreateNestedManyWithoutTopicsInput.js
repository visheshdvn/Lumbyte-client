"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCreateNestedManyWithoutTopicsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateManyTopicsInputEnvelope_1 = require("../inputs/BlogpostsCreateManyTopicsInputEnvelope");
const BlogpostsCreateOrConnectWithoutTopicsInput_1 = require("../inputs/BlogpostsCreateOrConnectWithoutTopicsInput");
const BlogpostsCreateWithoutTopicsInput_1 = require("../inputs/BlogpostsCreateWithoutTopicsInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsCreateNestedManyWithoutTopicsInput = class BlogpostsCreateNestedManyWithoutTopicsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateWithoutTopicsInput_1.BlogpostsCreateWithoutTopicsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsCreateNestedManyWithoutTopicsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateOrConnectWithoutTopicsInput_1.BlogpostsCreateOrConnectWithoutTopicsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsCreateNestedManyWithoutTopicsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateManyTopicsInputEnvelope_1.BlogpostsCreateManyTopicsInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateManyTopicsInputEnvelope_1.BlogpostsCreateManyTopicsInputEnvelope)
], BlogpostsCreateNestedManyWithoutTopicsInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsCreateNestedManyWithoutTopicsInput.prototype, "connect", void 0);
BlogpostsCreateNestedManyWithoutTopicsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsCreateNestedManyWithoutTopicsInput", {
        isAbstract: true
    })
], BlogpostsCreateNestedManyWithoutTopicsInput);
exports.BlogpostsCreateNestedManyWithoutTopicsInput = BlogpostsCreateNestedManyWithoutTopicsInput;
