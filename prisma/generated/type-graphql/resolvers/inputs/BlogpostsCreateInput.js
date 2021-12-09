"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateNestedManyWithoutSavedPostsInput_1 = require("../inputs/AccountCreateNestedManyWithoutSavedPostsInput");
const TagsCreateNestedManyWithoutBlogpostsInput_1 = require("../inputs/TagsCreateNestedManyWithoutBlogpostsInput");
const TopicsCreateNestedOneWithoutBlogpostsInput_1 = require("../inputs/TopicsCreateNestedOneWithoutBlogpostsInput");
const UserCreateNestedOneWithoutBlogpostsInput_1 = require("../inputs/UserCreateNestedOneWithoutBlogpostsInput");
let BlogpostsCreateInput = class BlogpostsCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateInput.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateInput.prototype, "excerpt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateInput.prototype, "banner", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlogpostsCreateInput.prototype, "banneralt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlogpostsCreateInput.prototype, "minuteRead", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateInput.prototype, "featured", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateInput.prototype, "topPick", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateInput.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BlogpostsCreateInput.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlogpostsCreateInput.prototype, "blocked", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBlogpostsInput_1.UserCreateNestedOneWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutBlogpostsInput_1.UserCreateNestedOneWithoutBlogpostsInput)
], BlogpostsCreateInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsCreateNestedOneWithoutBlogpostsInput_1.TopicsCreateNestedOneWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsCreateNestedOneWithoutBlogpostsInput_1.TopicsCreateNestedOneWithoutBlogpostsInput)
], BlogpostsCreateInput.prototype, "topics", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsCreateNestedManyWithoutBlogpostsInput_1.TagsCreateNestedManyWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsCreateNestedManyWithoutBlogpostsInput_1.TagsCreateNestedManyWithoutBlogpostsInput)
], BlogpostsCreateInput.prototype, "tags", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutSavedPostsInput_1.AccountCreateNestedManyWithoutSavedPostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateNestedManyWithoutSavedPostsInput_1.AccountCreateNestedManyWithoutSavedPostsInput)
], BlogpostsCreateInput.prototype, "savedBy", void 0);
BlogpostsCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlogpostsCreateInput", {
        isAbstract: true
    })
], BlogpostsCreateInput);
exports.BlogpostsCreateInput = BlogpostsCreateInput;
