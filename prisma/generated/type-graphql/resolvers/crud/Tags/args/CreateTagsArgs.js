"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagsCreateInput_1 = require("../../../inputs/TagsCreateInput");
let CreateTagsArgs = class CreateTagsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsCreateInput_1.TagsCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagsCreateInput_1.TagsCreateInput)
], CreateTagsArgs.prototype, "data", void 0);
CreateTagsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateTagsArgs);
exports.CreateTagsArgs = CreateTagsArgs;
