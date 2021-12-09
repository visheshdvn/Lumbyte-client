"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TagsCount = class TagsCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TagsCount.prototype, "blogposts", void 0);
TagsCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TagsCount", {
        isAbstract: true
    })
], TagsCount);
exports.TagsCount = TagsCount;
