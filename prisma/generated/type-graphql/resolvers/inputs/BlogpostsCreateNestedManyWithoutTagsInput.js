"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCreateNestedManyWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateOrConnectWithoutTagsInput_1 = require("../inputs/BlogpostsCreateOrConnectWithoutTagsInput");
const BlogpostsCreateWithoutTagsInput_1 = require("../inputs/BlogpostsCreateWithoutTagsInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsCreateNestedManyWithoutTagsInput = class BlogpostsCreateNestedManyWithoutTagsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateWithoutTagsInput_1.BlogpostsCreateWithoutTagsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsCreateNestedManyWithoutTagsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateOrConnectWithoutTagsInput_1.BlogpostsCreateOrConnectWithoutTagsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsCreateNestedManyWithoutTagsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsCreateNestedManyWithoutTagsInput.prototype, "connect", void 0);
BlogpostsCreateNestedManyWithoutTagsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsCreateNestedManyWithoutTagsInput", {
        isAbstract: true
    })
], BlogpostsCreateNestedManyWithoutTagsInput);
exports.BlogpostsCreateNestedManyWithoutTagsInput = BlogpostsCreateNestedManyWithoutTagsInput;
