"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCreateWithoutTopicsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateNestedManyWithoutSavedPostsInput_1 = require("../inputs/AccountCreateNestedManyWithoutSavedPostsInput");
const TagsCreateNestedManyWithoutBlogpostsInput_1 = require("../inputs/TagsCreateNestedManyWithoutBlogpostsInput");
const UserCreateNestedOneWithoutBlogpostsInput_1 = require("../inputs/UserCreateNestedOneWithoutBlogpostsInput");
let BlogpostsCreateWithoutTopicsInput = class BlogpostsCreateWithoutTopicsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutTopicsInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutTopicsInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutTopicsInput.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutTopicsInput.prototype, "excerpt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutTopicsInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutTopicsInput.prototype, "banner", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutTopicsInput.prototype, "banneralt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsCreateWithoutTopicsInput.prototype, "minuteRead", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateWithoutTopicsInput.prototype, "featured", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateWithoutTopicsInput.prototype, "topPick", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateWithoutTopicsInput.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateWithoutTopicsInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateWithoutTopicsInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateWithoutTopicsInput.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateWithoutTopicsInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateWithoutTopicsInput.prototype, "blocked", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBlogpostsInput_1.UserCreateNestedOneWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutBlogpostsInput_1.UserCreateNestedOneWithoutBlogpostsInput)
], BlogpostsCreateWithoutTopicsInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsCreateNestedManyWithoutBlogpostsInput_1.TagsCreateNestedManyWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsCreateNestedManyWithoutBlogpostsInput_1.TagsCreateNestedManyWithoutBlogpostsInput)
], BlogpostsCreateWithoutTopicsInput.prototype, "tags", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutSavedPostsInput_1.AccountCreateNestedManyWithoutSavedPostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateNestedManyWithoutSavedPostsInput_1.AccountCreateNestedManyWithoutSavedPostsInput)
], BlogpostsCreateWithoutTopicsInput.prototype, "savedBy", void 0);
BlogpostsCreateWithoutTopicsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsCreateWithoutTopicsInput", {
        isAbstract: true
    })
], BlogpostsCreateWithoutTopicsInput);
exports.BlogpostsCreateWithoutTopicsInput = BlogpostsCreateWithoutTopicsInput;
