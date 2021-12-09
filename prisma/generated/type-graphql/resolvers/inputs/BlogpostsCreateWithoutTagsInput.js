"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCreateWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateNestedManyWithoutSavedPostsInput_1 = require("../inputs/AccountCreateNestedManyWithoutSavedPostsInput");
const TopicsCreateNestedOneWithoutBlogpostsInput_1 = require("../inputs/TopicsCreateNestedOneWithoutBlogpostsInput");
const UserCreateNestedOneWithoutBlogpostsInput_1 = require("../inputs/UserCreateNestedOneWithoutBlogpostsInput");
let BlogpostsCreateWithoutTagsInput = class BlogpostsCreateWithoutTagsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutTagsInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutTagsInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutTagsInput.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutTagsInput.prototype, "excerpt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutTagsInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutTagsInput.prototype, "banner", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutTagsInput.prototype, "banneralt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsCreateWithoutTagsInput.prototype, "minuteRead", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateWithoutTagsInput.prototype, "featured", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateWithoutTagsInput.prototype, "topPick", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateWithoutTagsInput.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateWithoutTagsInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateWithoutTagsInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateWithoutTagsInput.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateWithoutTagsInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateWithoutTagsInput.prototype, "blocked", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBlogpostsInput_1.UserCreateNestedOneWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutBlogpostsInput_1.UserCreateNestedOneWithoutBlogpostsInput)
], BlogpostsCreateWithoutTagsInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsCreateNestedOneWithoutBlogpostsInput_1.TopicsCreateNestedOneWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsCreateNestedOneWithoutBlogpostsInput_1.TopicsCreateNestedOneWithoutBlogpostsInput)
], BlogpostsCreateWithoutTagsInput.prototype, "topics", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutSavedPostsInput_1.AccountCreateNestedManyWithoutSavedPostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateNestedManyWithoutSavedPostsInput_1.AccountCreateNestedManyWithoutSavedPostsInput)
], BlogpostsCreateWithoutTagsInput.prototype, "savedBy", void 0);
BlogpostsCreateWithoutTagsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsCreateWithoutTagsInput", {
        isAbstract: true
    })
], BlogpostsCreateWithoutTagsInput);
exports.BlogpostsCreateWithoutTagsInput = BlogpostsCreateWithoutTagsInput;
