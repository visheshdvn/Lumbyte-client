"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsCreateNestedManyWithoutTopicsInput_1 = require("../inputs/BlogpostsCreateNestedManyWithoutTopicsInput");
let TopicsCreateInput = class TopicsCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsCreateInput.prototype, "topicname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsCreateInput.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsCreateInput.prototype, "ogimg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsCreateInput.prototype, "ogalt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TopicsCreateInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TopicsCreateInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], TopicsCreateInput.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], TopicsCreateInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsCreateNestedManyWithoutTopicsInput_1.BlogpostsCreateNestedManyWithoutTopicsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsCreateNestedManyWithoutTopicsInput_1.BlogpostsCreateNestedManyWithoutTopicsInput)
], TopicsCreateInput.prototype, "blogposts", void 0);
TopicsCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TopicsCreateInput", {
        isAbstract: true
    })
], TopicsCreateInput);
exports.TopicsCreateInput = TopicsCreateInput;
