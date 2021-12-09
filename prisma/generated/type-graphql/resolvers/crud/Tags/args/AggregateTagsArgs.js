"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTagsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagsOrderByWithRelationInput_1 = require("../../../inputs/TagsOrderByWithRelationInput");
const TagsWhereInput_1 = require("../../../inputs/TagsWhereInput");
const TagsWhereUniqueInput_1 = require("../../../inputs/TagsWhereUniqueInput");
let AggregateTagsArgs = class AggregateTagsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsWhereInput_1.TagsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsWhereInput_1.TagsWhereInput)
], AggregateTagsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsOrderByWithRelationInput_1.TagsOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateTagsArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsWhereUniqueInput_1.TagsWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsWhereUniqueInput_1.TagsWhereUniqueInput)
], AggregateTagsArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateTagsArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateTagsArgs.prototype, "skip", void 0);
AggregateTagsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateTagsArgs);
exports.AggregateTagsArgs = AggregateTagsArgs;
