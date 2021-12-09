"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsUpdateManyWithoutTopicsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateManyTopicsInputEnvelope_1 = require("../inputs/BlogpostsCreateManyTopicsInputEnvelope");
const BlogpostsCreateOrConnectWithoutTopicsInput_1 = require("../inputs/BlogpostsCreateOrConnectWithoutTopicsInput");
const BlogpostsCreateWithoutTopicsInput_1 = require("../inputs/BlogpostsCreateWithoutTopicsInput");
const BlogpostsScalarWhereInput_1 = require("../inputs/BlogpostsScalarWhereInput");
const BlogpostsUpdateManyWithWhereWithoutTopicsInput_1 = require("../inputs/BlogpostsUpdateManyWithWhereWithoutTopicsInput");
const BlogpostsUpdateWithWhereUniqueWithoutTopicsInput_1 = require("../inputs/BlogpostsUpdateWithWhereUniqueWithoutTopicsInput");
const BlogpostsUpsertWithWhereUniqueWithoutTopicsInput_1 = require("../inputs/BlogpostsUpsertWithWhereUniqueWithoutTopicsInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsUpdateManyWithoutTopicsInput = class BlogpostsUpdateManyWithoutTopicsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateWithoutTopicsInput_1.BlogpostsCreateWithoutTopicsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTopicsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateOrConnectWithoutTopicsInput_1.BlogpostsCreateOrConnectWithoutTopicsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTopicsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsUpsertWithWhereUniqueWithoutTopicsInput_1.BlogpostsUpsertWithWhereUniqueWithoutTopicsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTopicsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateManyTopicsInputEnvelope_1.BlogpostsCreateManyTopicsInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateManyTopicsInputEnvelope_1.BlogpostsCreateManyTopicsInputEnvelope)
], BlogpostsUpdateManyWithoutTopicsInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTopicsInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTopicsInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTopicsInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTopicsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsUpdateWithWhereUniqueWithoutTopicsInput_1.BlogpostsUpdateWithWhereUniqueWithoutTopicsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTopicsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsUpdateManyWithWhereWithoutTopicsInput_1.BlogpostsUpdateManyWithWhereWithoutTopicsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTopicsInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsScalarWhereInput_1.BlogpostsScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTopicsInput.prototype, "deleteMany", void 0);
BlogpostsUpdateManyWithoutTopicsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsUpdateManyWithoutTopicsInput", {
        isAbstract: true
    })
], BlogpostsUpdateManyWithoutTopicsInput);
exports.BlogpostsUpdateManyWithoutTopicsInput = BlogpostsUpdateManyWithoutTopicsInput;
