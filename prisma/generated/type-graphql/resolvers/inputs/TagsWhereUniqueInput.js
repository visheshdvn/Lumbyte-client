"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TagsWhereUniqueInput = class TagsWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TagsWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsWhereUniqueInput.prototype, "tagname", void 0);
TagsWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagsWhereUniqueInput", {
        isAbstract: true
    })
], TagsWhereUniqueInput);
exports.TagsWhereUniqueInput = TagsWhereUniqueInput;
