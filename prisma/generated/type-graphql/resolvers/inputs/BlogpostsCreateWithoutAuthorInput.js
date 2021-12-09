"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateNestedManyWithoutSavedPostsInput_1 = require("../inputs/AccountCreateNestedManyWithoutSavedPostsInput");
const TagsCreateNestedManyWithoutBlogpostsInput_1 = require("../inputs/TagsCreateNestedManyWithoutBlogpostsInput");
const TopicsCreateNestedOneWithoutBlogpostsInput_1 = require("../inputs/TopicsCreateNestedOneWithoutBlogpostsInput");
let BlogpostsCreateWithoutAuthorInput = class BlogpostsCreateWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutAuthorInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutAuthorInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutAuthorInput.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutAuthorInput.prototype, "excerpt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutAuthorInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutAuthorInput.prototype, "banner", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateWithoutAuthorInput.prototype, "banneralt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsCreateWithoutAuthorInput.prototype, "minuteRead", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateWithoutAuthorInput.prototype, "featured", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateWithoutAuthorInput.prototype, "topPick", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateWithoutAuthorInput.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateWithoutAuthorInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateWithoutAuthorInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateWithoutAuthorInput.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateWithoutAuthorInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateWithoutAuthorInput.prototype, "blocked", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsCreateNestedOneWithoutBlogpostsInput_1.TopicsCreateNestedOneWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsCreateNestedOneWithoutBlogpostsInput_1.TopicsCreateNestedOneWithoutBlogpostsInput)
], BlogpostsCreateWithoutAuthorInput.prototype, "topics", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsCreateNestedManyWithoutBlogpostsInput_1.TagsCreateNestedManyWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsCreateNestedManyWithoutBlogpostsInput_1.TagsCreateNestedManyWithoutBlogpostsInput)
], BlogpostsCreateWithoutAuthorInput.prototype, "tags", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutSavedPostsInput_1.AccountCreateNestedManyWithoutSavedPostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateNestedManyWithoutSavedPostsInput_1.AccountCreateNestedManyWithoutSavedPostsInput)
], BlogpostsCreateWithoutAuthorInput.prototype, "savedBy", void 0);
BlogpostsCreateWithoutAuthorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsCreateWithoutAuthorInput", {
        isAbstract: true
    })
], BlogpostsCreateWithoutAuthorInput);
exports.BlogpostsCreateWithoutAuthorInput = BlogpostsCreateWithoutAuthorInput;
