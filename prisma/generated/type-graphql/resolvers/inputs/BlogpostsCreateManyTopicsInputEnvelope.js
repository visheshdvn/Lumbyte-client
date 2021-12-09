"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCreateManyTopicsInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateManyTopicsInput_1 = require("../inputs/BlogpostsCreateManyTopicsInput");
let BlogpostsCreateManyTopicsInputEnvelope = class BlogpostsCreateManyTopicsInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateManyTopicsInput_1.BlogpostsCreateManyTopicsInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsCreateManyTopicsInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateManyTopicsInputEnvelope.prototype, "skipDuplicates", void 0);
BlogpostsCreateManyTopicsInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsCreateManyTopicsInputEnvelope", {
        isAbstract: true
    })
], BlogpostsCreateManyTopicsInputEnvelope);
exports.BlogpostsCreateManyTopicsInputEnvelope = BlogpostsCreateManyTopicsInputEnvelope;
