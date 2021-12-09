"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsUpdateManyWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateOrConnectWithoutTagsInput_1 = require("../inputs/BlogpostsCreateOrConnectWithoutTagsInput");
const BlogpostsCreateWithoutTagsInput_1 = require("../inputs/BlogpostsCreateWithoutTagsInput");
const BlogpostsScalarWhereInput_1 = require("../inputs/BlogpostsScalarWhereInput");
const BlogpostsUpdateManyWithWhereWithoutTagsInput_1 = require("../inputs/BlogpostsUpdateManyWithWhereWithoutTagsInput");
const BlogpostsUpdateWithWhereUniqueWithoutTagsInput_1 = require("../inputs/BlogpostsUpdateWithWhereUniqueWithoutTagsInput");
const BlogpostsUpsertWithWhereUniqueWithoutTagsInput_1 = require("../inputs/BlogpostsUpsertWithWhereUniqueWithoutTagsInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsUpdateManyWithoutTagsInput = class BlogpostsUpdateManyWithoutTagsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateWithoutTagsInput_1.BlogpostsCreateWithoutTagsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTagsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateOrConnectWithoutTagsInput_1.BlogpostsCreateOrConnectWithoutTagsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTagsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsUpsertWithWhereUniqueWithoutTagsInput_1.BlogpostsUpsertWithWhereUniqueWithoutTagsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTagsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTagsInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTagsInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTagsInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTagsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsUpdateWithWhereUniqueWithoutTagsInput_1.BlogpostsUpdateWithWhereUniqueWithoutTagsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTagsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsUpdateManyWithWhereWithoutTagsInput_1.BlogpostsUpdateManyWithWhereWithoutTagsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTagsInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsScalarWhereInput_1.BlogpostsScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutTagsInput.prototype, "deleteMany", void 0);
BlogpostsUpdateManyWithoutTagsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsUpdateManyWithoutTagsInput", {
        isAbstract: true
    })
], BlogpostsUpdateManyWithoutTagsInput);
exports.BlogpostsUpdateManyWithoutTagsInput = BlogpostsUpdateManyWithoutTagsInput;
