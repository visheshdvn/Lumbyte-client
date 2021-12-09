"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBlogpostsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstBlogpostsArgs_1 = require("./args/FindFirstBlogpostsArgs");
const Blogposts_1 = require("../../../models/Blogposts");
const helpers_1 = require("../../../helpers");
let FindFirstBlogpostsResolver = class FindFirstBlogpostsResolver {
    async findFirstBlogposts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Blogposts_1.Blogposts, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstBlogpostsArgs_1.FindFirstBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstBlogpostsResolver.prototype, "findFirstBlogposts", null);
FindFirstBlogpostsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Blogposts_1.Blogposts)
], FindFirstBlogpostsResolver);
exports.FindFirstBlogpostsResolver = FindFirstBlogpostsResolver;
