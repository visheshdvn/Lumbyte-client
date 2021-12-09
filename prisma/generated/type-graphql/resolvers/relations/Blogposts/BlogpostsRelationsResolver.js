"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Account_1 = require("../../../models/Account");
const Blogposts_1 = require("../../../models/Blogposts");
const Tags_1 = require("../../../models/Tags");
const Topics_1 = require("../../../models/Topics");
const User_1 = require("../../../models/User");
const BlogpostsSavedByArgs_1 = require("./args/BlogpostsSavedByArgs");
const BlogpostsTagsArgs_1 = require("./args/BlogpostsTagsArgs");
const helpers_1 = require("../../../helpers");
let BlogpostsRelationsResolver = class BlogpostsRelationsResolver {
    async author(blogposts, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.findUnique({
            where: {
                id: blogposts.id,
            },
        }).author({});
    }
    async topics(blogposts, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.findUnique({
            where: {
                id: blogposts.id,
            },
        }).topics({});
    }
    async tags(blogposts, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.findUnique({
            where: {
                id: blogposts.id,
            },
        }).tags(args);
    }
    async savedBy(blogposts, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.findUnique({
            where: {
                id: blogposts.id,
            },
        }).savedBy(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Blogposts_1.Blogposts, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlogpostsRelationsResolver.prototype, "author", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Topics_1.Topics, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Blogposts_1.Blogposts, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlogpostsRelationsResolver.prototype, "topics", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Tags_1.Tags], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Blogposts_1.Blogposts, Object, BlogpostsTagsArgs_1.BlogpostsTagsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlogpostsRelationsResolver.prototype, "tags", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Account_1.Account], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Blogposts_1.Blogposts, Object, BlogpostsSavedByArgs_1.BlogpostsSavedByArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlogpostsRelationsResolver.prototype, "savedBy", null);
BlogpostsRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Blogposts_1.Blogposts)
], BlogpostsRelationsResolver);
exports.BlogpostsRelationsResolver = BlogpostsRelationsResolver;
