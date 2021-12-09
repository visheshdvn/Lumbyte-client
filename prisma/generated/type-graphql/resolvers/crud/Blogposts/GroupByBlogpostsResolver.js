"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBlogpostsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByBlogpostsArgs_1 = require("./args/GroupByBlogpostsArgs");
const Blogposts_1 = require("../../../models/Blogposts");
const BlogpostsGroupBy_1 = require("../../outputs/BlogpostsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByBlogpostsResolver = class GroupByBlogpostsResolver {
    async groupByBlogposts(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [BlogpostsGroupBy_1.BlogpostsGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByBlogpostsArgs_1.GroupByBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByBlogpostsResolver.prototype, "groupByBlogposts", null);
GroupByBlogpostsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Blogposts_1.Blogposts)
], GroupByBlogpostsResolver);
exports.GroupByBlogpostsResolver = GroupByBlogpostsResolver;
