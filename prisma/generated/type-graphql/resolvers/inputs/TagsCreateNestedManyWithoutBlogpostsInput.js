"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsCreateNestedManyWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagsCreateOrConnectWithoutBlogpostsInput_1 = require("../inputs/TagsCreateOrConnectWithoutBlogpostsInput");
const TagsCreateWithoutBlogpostsInput_1 = require("../inputs/TagsCreateWithoutBlogpostsInput");
const TagsWhereUniqueInput_1 = require("../inputs/TagsWhereUniqueInput");
let TagsCreateNestedManyWithoutBlogpostsInput = class TagsCreateNestedManyWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsCreateWithoutBlogpostsInput_1.TagsCreateWithoutBlogpostsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagsCreateNestedManyWithoutBlogpostsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsCreateOrConnectWithoutBlogpostsInput_1.TagsCreateOrConnectWithoutBlogpostsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagsCreateNestedManyWithoutBlogpostsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsWhereUniqueInput_1.TagsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagsCreateNestedManyWithoutBlogpostsInput.prototype, "connect", void 0);
TagsCreateNestedManyWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagsCreateNestedManyWithoutBlogpostsInput", {
        isAbstract: true
    })
], TagsCreateNestedManyWithoutBlogpostsInput);
exports.TagsCreateNestedManyWithoutBlogpostsInput = TagsCreateNestedManyWithoutBlogpostsInput;
