"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateManyAuthorInputEnvelope_1 = require("../inputs/BlogpostsCreateManyAuthorInputEnvelope");
const BlogpostsCreateOrConnectWithoutAuthorInput_1 = require("../inputs/BlogpostsCreateOrConnectWithoutAuthorInput");
const BlogpostsCreateWithoutAuthorInput_1 = require("../inputs/BlogpostsCreateWithoutAuthorInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsCreateNestedManyWithoutAuthorInput = class BlogpostsCreateNestedManyWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateWithoutAuthorInput_1.BlogpostsCreateWithoutAuthorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateOrConnectWithoutAuthorInput_1.BlogpostsCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateManyAuthorInputEnvelope_1.BlogpostsCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateManyAuthorInputEnvelope_1.BlogpostsCreateManyAuthorInputEnvelope)
], BlogpostsCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
BlogpostsCreateNestedManyWithoutAuthorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsCreateNestedManyWithoutAuthorInput", {
        isAbstract: true
    })
], BlogpostsCreateNestedManyWithoutAuthorInput);
exports.BlogpostsCreateNestedManyWithoutAuthorInput = BlogpostsCreateNestedManyWithoutAuthorInput;
