"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagsWhereInput_1 = require("../inputs/TagsWhereInput");
let TagsListRelationFilter = class TagsListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsWhereInput_1.TagsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsWhereInput_1.TagsWhereInput)
], TagsListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsWhereInput_1.TagsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsWhereInput_1.TagsWhereInput)
], TagsListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsWhereInput_1.TagsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsWhereInput_1.TagsWhereInput)
], TagsListRelationFilter.prototype, "none", void 0);
TagsListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagsListRelationFilter", {
        isAbstract: true
    })
], TagsListRelationFilter);
exports.TagsListRelationFilter = TagsListRelationFilter;
