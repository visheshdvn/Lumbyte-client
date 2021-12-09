"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateBlogpostsArgs_1 = require("./args/AggregateBlogpostsArgs");
const CreateBlogpostsArgs_1 = require("./args/CreateBlogpostsArgs");
const CreateManyBlogpostsArgs_1 = require("./args/CreateManyBlogpostsArgs");
const DeleteBlogpostsArgs_1 = require("./args/DeleteBlogpostsArgs");
const DeleteManyBlogpostsArgs_1 = require("./args/DeleteManyBlogpostsArgs");
const FindFirstBlogpostsArgs_1 = require("./args/FindFirstBlogpostsArgs");
const FindManyBlogpostsArgs_1 = require("./args/FindManyBlogpostsArgs");
const FindUniqueBlogpostsArgs_1 = require("./args/FindUniqueBlogpostsArgs");
const GroupByBlogpostsArgs_1 = require("./args/GroupByBlogpostsArgs");
const UpdateBlogpostsArgs_1 = require("./args/UpdateBlogpostsArgs");
const UpdateManyBlogpostsArgs_1 = require("./args/UpdateManyBlogpostsArgs");
const UpsertBlogpostsArgs_1 = require("./args/UpsertBlogpostsArgs");
const helpers_1 = require("../../../helpers");
const Blogposts_1 = require("../../../models/Blogposts");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBlogposts_1 = require("../../outputs/AggregateBlogposts");
const BlogpostsGroupBy_1 = require("../../outputs/BlogpostsGroupBy");
let BlogpostsCrudResolver = class BlogpostsCrudResolver {
    async findUniqueBlogposts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBlogposts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyBlogposts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createBlogposts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyBlogposts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteBlogposts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateBlogposts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBlogposts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyBlogposts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertBlogposts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateBlogposts(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByBlogposts(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueBlogpostsArgs_1.FindUniqueBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlogpostsCrudResolver.prototype, "findUniqueBlogposts", null);
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
], BlogpostsCrudResolver.prototype, "findFirstBlogposts", null);
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
], BlogpostsCrudResolver.prototype, "findManyBlogposts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Blogposts_1.Blogposts, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateBlogpostsArgs_1.CreateBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlogpostsCrudResolver.prototype, "createBlogposts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyBlogpostsArgs_1.CreateManyBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlogpostsCrudResolver.prototype, "createManyBlogposts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Blogposts_1.Blogposts, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteBlogpostsArgs_1.DeleteBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlogpostsCrudResolver.prototype, "deleteBlogposts", null);
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
], BlogpostsCrudResolver.prototype, "updateBlogposts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyBlogpostsArgs_1.DeleteManyBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlogpostsCrudResolver.prototype, "deleteManyBlogposts", null);
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
], BlogpostsCrudResolver.prototype, "updateManyBlogposts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Blogposts_1.Blogposts, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertBlogpostsArgs_1.UpsertBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlogpostsCrudResolver.prototype, "upsertBlogposts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateBlogposts_1.AggregateBlogposts, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateBlogpostsArgs_1.AggregateBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BlogpostsCrudResolver.prototype, "aggregateBlogposts", null);
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
], BlogpostsCrudResolver.prototype, "groupByBlogposts", null);
BlogpostsCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Blogposts_1.Blogposts)
], BlogpostsCrudResolver);
exports.BlogpostsCrudResolver = BlogpostsCrudResolver;
