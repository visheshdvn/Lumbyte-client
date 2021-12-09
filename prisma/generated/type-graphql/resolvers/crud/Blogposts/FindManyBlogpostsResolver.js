"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBlogpostsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyBlogpostsArgs_1 = require("./args/FindManyBlogpostsArgs");
const Blogposts_1 = require("../../../models/Blogposts");
const helpers_1 = require("../../../helpers");
let FindManyBlogpostsResolver = class FindManyBlogpostsResolver {
    async findManyBlogposts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Blogposts_1.Blogposts], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyBlogpostsArgs_1.FindManyBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindManyBlogpostsResolver.prototype, "findManyBlogposts", null);
FindManyBlogpostsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Blogposts_1.Blogposts)
], FindManyBlogpostsResolver);
exports.FindManyBlogpostsResolver = FindManyBlogpostsResolver;
