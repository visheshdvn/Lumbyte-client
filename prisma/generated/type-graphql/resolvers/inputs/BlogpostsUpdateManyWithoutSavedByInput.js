"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsUpdateManyWithoutSavedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateOrConnectWithoutSavedByInput_1 = require("../inputs/BlogpostsCreateOrConnectWithoutSavedByInput");
const BlogpostsCreateWithoutSavedByInput_1 = require("../inputs/BlogpostsCreateWithoutSavedByInput");
const BlogpostsScalarWhereInput_1 = require("../inputs/BlogpostsScalarWhereInput");
const BlogpostsUpdateManyWithWhereWithoutSavedByInput_1 = require("../inputs/BlogpostsUpdateManyWithWhereWithoutSavedByInput");
const BlogpostsUpdateWithWhereUniqueWithoutSavedByInput_1 = require("../inputs/BlogpostsUpdateWithWhereUniqueWithoutSavedByInput");
const BlogpostsUpsertWithWhereUniqueWithoutSavedByInput_1 = require("../inputs/BlogpostsUpsertWithWhereUniqueWithoutSavedByInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsUpdateManyWithoutSavedByInput = class BlogpostsUpdateManyWithoutSavedByInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateWithoutSavedByInput_1.BlogpostsCreateWithoutSavedByInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutSavedByInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateOrConnectWithoutSavedByInput_1.BlogpostsCreateOrConnectWithoutSavedByInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutSavedByInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsUpsertWithWhereUniqueWithoutSavedByInput_1.BlogpostsUpsertWithWhereUniqueWithoutSavedByInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutSavedByInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutSavedByInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutSavedByInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutSavedByInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutSavedByInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsUpdateWithWhereUniqueWithoutSavedByInput_1.BlogpostsUpdateWithWhereUniqueWithoutSavedByInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutSavedByInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsUpdateManyWithWhereWithoutSavedByInput_1.BlogpostsUpdateManyWithWhereWithoutSavedByInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutSavedByInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsScalarWhereInput_1.BlogpostsScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsUpdateManyWithoutSavedByInput.prototype, "deleteMany", void 0);
BlogpostsUpdateManyWithoutSavedByInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsUpdateManyWithoutSavedByInput", {
        isAbstract: true
    })
], BlogpostsUpdateManyWithoutSavedByInput);
exports.BlogpostsUpdateManyWithoutSavedByInput = BlogpostsUpdateManyWithoutSavedByInput;
