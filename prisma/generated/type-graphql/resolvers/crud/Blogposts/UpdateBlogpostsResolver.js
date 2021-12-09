"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlogpostsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateBlogpostsArgs_1 = require("./args/UpdateBlogpostsArgs");
const Blogposts_1 = require("../../../models/Blogposts");
const helpers_1 = require("../../../helpers");
let UpdateBlogpostsResolver = class UpdateBlogpostsResolver {
    async updateBlogposts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Blogposts_1.Blogposts, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateBlogpostsArgs_1.UpdateBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateBlogpostsResolver.prototype, "updateBlogposts", null);
UpdateBlogpostsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Blogposts_1.Blogposts)
], UpdateBlogpostsResolver);
exports.UpdateBlogpostsResolver = UpdateBlogpostsResolver;
