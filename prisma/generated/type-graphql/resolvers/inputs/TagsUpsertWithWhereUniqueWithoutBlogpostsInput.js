"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsUpsertWithWhereUniqueWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagsCreateWithoutBlogpostsInput_1 = require("../inputs/TagsCreateWithoutBlogpostsInput");
const TagsUpdateWithoutBlogpostsInput_1 = require("../inputs/TagsUpdateWithoutBlogpostsInput");
const TagsWhereUniqueInput_1 = require("../inputs/TagsWhereUniqueInput");
let TagsUpsertWithWhereUniqueWithoutBlogpostsInput = class TagsUpsertWithWhereUniqueWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsWhereUniqueInput_1.TagsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagsWhereUniqueInput_1.TagsWhereUniqueInput)
], TagsUpsertWithWhereUniqueWithoutBlogpostsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsUpdateWithoutBlogpostsInput_1.TagsUpdateWithoutBlogpostsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagsUpdateWithoutBlogpostsInput_1.TagsUpdateWithoutBlogpostsInput)
], TagsUpsertWithWhereUniqueWithoutBlogpostsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsCreateWithoutBlogpostsInput_1.TagsCreateWithoutBlogpostsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagsCreateWithoutBlogpostsInput_1.TagsCreateWithoutBlogpostsInput)
], TagsUpsertWithWhereUniqueWithoutBlogpostsInput.prototype, "create", void 0);
TagsUpsertWithWhereUniqueWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagsUpsertWithWhereUniqueWithoutBlogpostsInput", {
        isAbstract: true
    })
], TagsUpsertWithWhereUniqueWithoutBlogpostsInput);
exports.TagsUpsertWithWhereUniqueWithoutBlogpostsInput = TagsUpsertWithWhereUniqueWithoutBlogpostsInput;
