"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Blogposts_1 = require("../../../models/Blogposts");
const Topics_1 = require("../../../models/Topics");
const TopicsBlogpostsArgs_1 = require("./args/TopicsBlogpostsArgs");
const helpers_1 = require("../../../helpers");
let TopicsRelationsResolver = class TopicsRelationsResolver {
    async blogposts(topics, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.findUnique({
            where: {
                id: topics.id,
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
    (0, tslib_1.__metadata)("design:paramtypes", [Topics_1.Topics, Object, TopicsBlogpostsArgs_1.TopicsBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TopicsRelationsResolver.prototype, "blogposts", null);
TopicsRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Topics_1.Topics)
], TopicsRelationsResolver);
exports.TopicsRelationsResolver = TopicsRelationsResolver;
