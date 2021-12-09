"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateNestedManyWithoutTagsInput_1 = require("../inputs/BlogpostsCreateNestedManyWithoutTagsInput");
let TagsCreateInput = class TagsCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsCreateInput.prototype, "tagname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsCreateInput.prototype, "color", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsCreateInput.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsCreateInput.prototype, "ogimg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsCreateInput.prototype, "ogalt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TagsCreateInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TagsCreateInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TagsCreateInput.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], TagsCreateInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateNestedManyWithoutTagsInput_1.BlogpostsCreateNestedManyWithoutTagsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateNestedManyWithoutTagsInput_1.BlogpostsCreateNestedManyWithoutTagsInput)
], TagsCreateInput.prototype, "blogposts", void 0);
TagsCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagsCreateInput", {
        isAbstract: true
    })
], TagsCreateInput);
exports.TagsCreateInput = TagsCreateInput;
