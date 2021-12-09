"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBlogpostsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateManyBlogpostsArgs_1 = require("./args/UpdateManyBlogpostsArgs");
const Blogposts_1 = require("../../../models/Blogposts");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyBlogpostsResolver = class UpdateManyBlogpostsResolver {
    async updateManyBlogposts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyBlogpostsArgs_1.UpdateManyBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateManyBlogpostsResolver.prototype, "updateManyBlogposts", null);
UpdateManyBlogpostsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Blogposts_1.Blogposts)
], UpdateManyBlogpostsResolver);
exports.UpdateManyBlogpostsResolver = UpdateManyBlogpostsResolver;
