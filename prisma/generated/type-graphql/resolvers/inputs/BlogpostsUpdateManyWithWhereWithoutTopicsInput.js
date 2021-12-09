"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsUpdateManyWithWhereWithoutTopicsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsScalarWhereInput_1 = require("../inputs/BlogpostsScalarWhereInput");
const BlogpostsUpdateManyMutationInput_1 = require("../inputs/BlogpostsUpdateManyMutationInput");
let BlogpostsUpdateManyWithWhereWithoutTopicsInput = class BlogpostsUpdateManyWithWhereWithoutTopicsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsScalarWhereInput_1.BlogpostsScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsScalarWhereInput_1.BlogpostsScalarWhereInput)
], BlogpostsUpdateManyWithWhereWithoutTopicsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsUpdateManyMutationInput_1.BlogpostsUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsUpdateManyMutationInput_1.BlogpostsUpdateManyMutationInput)
], BlogpostsUpdateManyWithWhereWithoutTopicsInput.prototype, "data", void 0);
BlogpostsUpdateManyWithWhereWithoutTopicsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsUpdateManyWithWhereWithoutTopicsInput", {
        isAbstract: true
    })
], BlogpostsUpdateManyWithWhereWithoutTopicsInput);
exports.BlogpostsUpdateManyWithWhereWithoutTopicsInput = BlogpostsUpdateManyWithWhereWithoutTopicsInput;
