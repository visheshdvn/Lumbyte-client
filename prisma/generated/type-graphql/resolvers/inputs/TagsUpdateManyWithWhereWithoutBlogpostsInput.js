"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsUpdateManyWithWhereWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagsScalarWhereInput_1 = require("../inputs/TagsScalarWhereInput");
const TagsUpdateManyMutationInput_1 = require("../inputs/TagsUpdateManyMutationInput");
let TagsUpdateManyWithWhereWithoutBlogpostsInput = class TagsUpdateManyWithWhereWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsScalarWhereInput_1.TagsScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagsScalarWhereInput_1.TagsScalarWhereInput)
], TagsUpdateManyWithWhereWithoutBlogpostsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsUpdateManyMutationInput_1.TagsUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagsUpdateManyMutationInput_1.TagsUpdateManyMutationInput)
], TagsUpdateManyWithWhereWithoutBlogpostsInput.prototype, "data", void 0);
TagsUpdateManyWithWhereWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagsUpdateManyWithWhereWithoutBlogpostsInput", {
        isAbstract: true
    })
], TagsUpdateManyWithWhereWithoutBlogpostsInput);
exports.TagsUpdateManyWithWhereWithoutBlogpostsInput = TagsUpdateManyWithWhereWithoutBlogpostsInput;
