"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateManyAuthorInput_1 = require("../inputs/BlogpostsCreateManyAuthorInput");
let BlogpostsCreateManyAuthorInputEnvelope = class BlogpostsCreateManyAuthorInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateManyAuthorInput_1.BlogpostsCreateManyAuthorInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsCreateManyAuthorInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
BlogpostsCreateManyAuthorInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsCreateManyAuthorInputEnvelope", {
        isAbstract: true
    })
], BlogpostsCreateManyAuthorInputEnvelope);
exports.BlogpostsCreateManyAuthorInputEnvelope = BlogpostsCreateManyAuthorInputEnvelope;
