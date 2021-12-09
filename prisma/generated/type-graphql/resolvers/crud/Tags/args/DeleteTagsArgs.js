"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTagsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagsWhereUniqueInput_1 = require("../../../inputs/TagsWhereUniqueInput");
let DeleteTagsArgs = class DeleteTagsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsWhereUniqueInput_1.TagsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagsWhereUniqueInput_1.TagsWhereUniqueInput)
], DeleteTagsArgs.prototype, "where", void 0);
DeleteTagsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteTagsArgs);
exports.DeleteTagsArgs = DeleteTagsArgs;
