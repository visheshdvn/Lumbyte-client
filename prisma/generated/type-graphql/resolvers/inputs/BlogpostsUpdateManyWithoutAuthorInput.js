"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsUpdateManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateManyAuthorInputEnvelope_1 = require("../inputs/BlogpostsCreateManyAuthorInputEnvelope");
const BlogpostsCreateOrConnectWithoutAuthorInput_1 = require("../inputs/BlogpostsCreateOrConnectWithoutAuthorInput");
const BlogpostsCreateWithoutAuthorInput_1 = require("../inputs/BlogpostsCreateWithoutAuthorInput");
const BlogpostsScalarWhereInput_1 = require("../inputs/BlogpostsScalarWhereInput");
const BlogpostsUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/BlogpostsUpdateManyWithWhereWithoutAuthorInput");
const BlogpostsUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/BlogpostsUpdateWithWhereUniqueWithoutAuthorInput");
const BlogpostsUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/BlogpostsUpsertWithWhereUniqueWithoutAuthorInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsUpdateManyWithoutAuthorInput = class BlogpostsUpdateManyWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateWithoutAuthorInput_1.BlogpostsCreateWithoutAuthorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutAuthorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateOrConnectWithoutAuthorInput_1.BlogpostsCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsUpsertWithWhereUniqueWithoutAuthorInput_1.BlogpostsUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateManyAuthorInputEnvelope_1.BlogpostsCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateManyAuthorInputEnvelope_1.BlogpostsCreateManyAuthorInputEnvelope)
], BlogpostsUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutAuthorInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsUpdateWithWhereUniqueWithoutAuthorInput_1.BlogpostsUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutAuthorInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsUpdateManyWithWhereWithoutAuthorInput_1.BlogpostsUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsScalarWhereInput_1.BlogpostsScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
BlogpostsUpdateManyWithoutAuthorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsUpdateManyWithoutAuthorInput", {
        isAbstract: true
    })
], BlogpostsUpdateManyWithoutAuthorInput);
exports.BlogpostsUpdateManyWithoutAuthorInput = BlogpostsUpdateManyWithoutAuthorInput;
