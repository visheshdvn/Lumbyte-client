"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsCreateOrConnectWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagsCreateWithoutBlogpostsInput_1 = require("../inputs/TagsCreateWithoutBlogpostsInput");
const TagsWhereUniqueInput_1 = require("../inputs/TagsWhereUniqueInput");
let TagsCreateOrConnectWithoutBlogpostsInput = class TagsCreateOrConnectWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsWhereUniqueInput_1.TagsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagsWhereUniqueInput_1.TagsWhereUniqueInput)
], TagsCreateOrConnectWithoutBlogpostsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsCreateWithoutBlogpostsInput_1.TagsCreateWithoutBlogpostsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagsCreateWithoutBlogpostsInput_1.TagsCreateWithoutBlogpostsInput)
], TagsCreateOrConnectWithoutBlogpostsInput.prototype, "create", void 0);
TagsCreateOrConnectWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagsCreateOrConnectWithoutBlogpostsInput", {
        isAbstract: true
    })
], TagsCreateOrConnectWithoutBlogpostsInput);
exports.TagsCreateOrConnectWithoutBlogpostsInput = TagsCreateOrConnectWithoutBlogpostsInput;
