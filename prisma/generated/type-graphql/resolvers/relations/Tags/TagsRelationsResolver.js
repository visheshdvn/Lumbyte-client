"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Blogposts_1 = require("../../../models/Blogposts");
const Tags_1 = require("../../../models/Tags");
const TagsBlogpostsArgs_1 = require("./args/TagsBlogpostsArgs");
const helpers_1 = require("../../../helpers");
let TagsRelationsResolver = class TagsRelationsResolver {
    async blogposts(tags, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.findUnique({
            where: {
                id: tags.id,
            },
        }).blogposts(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Blogposts_1.Blogposts], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Tags_1.Tags, Object, TagsBlogpostsArgs_1.TagsBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagsRelationsResolver.prototype, "blogposts", null);
TagsRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Tags_1.Tags)
], TagsRelationsResolver);
exports.TagsRelationsResolver = TagsRelationsResolver;
