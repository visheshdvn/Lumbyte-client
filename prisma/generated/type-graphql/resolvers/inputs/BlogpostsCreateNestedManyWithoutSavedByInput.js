"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCreateNestedManyWithoutSavedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateOrConnectWithoutSavedByInput_1 = require("../inputs/BlogpostsCreateOrConnectWithoutSavedByInput");
const BlogpostsCreateWithoutSavedByInput_1 = require("../inputs/BlogpostsCreateWithoutSavedByInput");
const BlogpostsWhereUniqueInput_1 = require("../inputs/BlogpostsWhereUniqueInput");
let BlogpostsCreateNestedManyWithoutSavedByInput = class BlogpostsCreateNestedManyWithoutSavedByInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateWithoutSavedByInput_1.BlogpostsCreateWithoutSavedByInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsCreateNestedManyWithoutSavedByInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsCreateOrConnectWithoutSavedByInput_1.BlogpostsCreateOrConnectWithoutSavedByInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsCreateNestedManyWithoutSavedByInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlogpostsCreateNestedManyWithoutSavedByInput.prototype, "connect", void 0);
BlogpostsCreateNestedManyWithoutSavedByInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsCreateNestedManyWithoutSavedByInput", {
        isAbstract: true
    })
], BlogpostsCreateNestedManyWithoutSavedByInput);
exports.BlogpostsCreateNestedManyWithoutSavedByInput = BlogpostsCreateNestedManyWithoutSavedByInput;
