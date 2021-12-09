"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsTagsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagsOrderByWithRelationInput_1 = require("../../../inputs/TagsOrderByWithRelationInput");
const TagsWhereInput_1 = require("../../../inputs/TagsWhereInput");
const TagsWhereUniqueInput_1 = require("../../../inputs/TagsWhereUniqueInput");
const TagsScalarFieldEnum_1 = require("../../../../enums/TagsScalarFieldEnum");
let BlogpostsTagsArgs = class BlogpostsTagsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsWhereInput_1.TagsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsWhereInput_1.TagsWhereInput)
], BlogpostsTagsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsOrderByWithRelationInput_1.TagsOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsTagsArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsWhereUniqueInput_1.TagsWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsWhereUniqueInput_1.TagsWhereUniqueInput)
], BlogpostsTagsArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsTagsArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsTagsArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsScalarFieldEnum_1.TagsScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsTagsArgs.prototype, "distinct", void 0);
BlogpostsTagsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], BlogpostsTagsArgs);
exports.BlogpostsTagsArgs = BlogpostsTagsArgs;
