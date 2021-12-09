"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsUpdateWithWhereUniqueWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagsUpdateWithoutBlogpostsInput_1 = require("../inputs/TagsUpdateWithoutBlogpostsInput");
const TagsWhereUniqueInput_1 = require("../inputs/TagsWhereUniqueInput");
let TagsUpdateWithWhereUniqueWithoutBlogpostsInput = class TagsUpdateWithWhereUniqueWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsWhereUniqueInput_1.TagsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagsWhereUniqueInput_1.TagsWhereUniqueInput)
], TagsUpdateWithWhereUniqueWithoutBlogpostsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsUpdateWithoutBlogpostsInput_1.TagsUpdateWithoutBlogpostsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagsUpdateWithoutBlogpostsInput_1.TagsUpdateWithoutBlogpostsInput)
], TagsUpdateWithWhereUniqueWithoutBlogpostsInput.prototype, "data", void 0);
TagsUpdateWithWhereUniqueWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagsUpdateWithWhereUniqueWithoutBlogpostsInput", {
        isAbstract: true
    })
], TagsUpdateWithWhereUniqueWithoutBlogpostsInput);
exports.TagsUpdateWithWhereUniqueWithoutBlogpostsInput = TagsUpdateWithWhereUniqueWithoutBlogpostsInput;
