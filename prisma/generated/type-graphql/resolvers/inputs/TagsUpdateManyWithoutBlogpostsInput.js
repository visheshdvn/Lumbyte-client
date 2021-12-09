"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsUpdateManyWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagsCreateOrConnectWithoutBlogpostsInput_1 = require("../inputs/TagsCreateOrConnectWithoutBlogpostsInput");
const TagsCreateWithoutBlogpostsInput_1 = require("../inputs/TagsCreateWithoutBlogpostsInput");
const TagsScalarWhereInput_1 = require("../inputs/TagsScalarWhereInput");
const TagsUpdateManyWithWhereWithoutBlogpostsInput_1 = require("../inputs/TagsUpdateManyWithWhereWithoutBlogpostsInput");
const TagsUpdateWithWhereUniqueWithoutBlogpostsInput_1 = require("../inputs/TagsUpdateWithWhereUniqueWithoutBlogpostsInput");
const TagsUpsertWithWhereUniqueWithoutBlogpostsInput_1 = require("../inputs/TagsUpsertWithWhereUniqueWithoutBlogpostsInput");
const TagsWhereUniqueInput_1 = require("../inputs/TagsWhereUniqueInput");
let TagsUpdateManyWithoutBlogpostsInput = class TagsUpdateManyWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsCreateWithoutBlogpostsInput_1.TagsCreateWithoutBlogpostsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagsUpdateManyWithoutBlogpostsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsCreateOrConnectWithoutBlogpostsInput_1.TagsCreateOrConnectWithoutBlogpostsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagsUpdateManyWithoutBlogpostsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsUpsertWithWhereUniqueWithoutBlogpostsInput_1.TagsUpsertWithWhereUniqueWithoutBlogpostsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagsUpdateManyWithoutBlogpostsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsWhereUniqueInput_1.TagsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagsUpdateManyWithoutBlogpostsInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsWhereUniqueInput_1.TagsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagsUpdateManyWithoutBlogpostsInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsWhereUniqueInput_1.TagsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagsUpdateManyWithoutBlogpostsInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsWhereUniqueInput_1.TagsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagsUpdateManyWithoutBlogpostsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsUpdateWithWhereUniqueWithoutBlogpostsInput_1.TagsUpdateWithWhereUniqueWithoutBlogpostsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagsUpdateManyWithoutBlogpostsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsUpdateManyWithWhereWithoutBlogpostsInput_1.TagsUpdateManyWithWhereWithoutBlogpostsInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagsUpdateManyWithoutBlogpostsInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagsScalarWhereInput_1.TagsScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagsUpdateManyWithoutBlogpostsInput.prototype, "deleteMany", void 0);
TagsUpdateManyWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagsUpdateManyWithoutBlogpostsInput", {
        isAbstract: true
    })
], TagsUpdateManyWithoutBlogpostsInput);
exports.TagsUpdateManyWithoutBlogpostsInput = TagsUpdateManyWithoutBlogpostsInput;
