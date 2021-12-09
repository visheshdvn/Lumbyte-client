"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateTopicsArgs_1 = require("./args/AggregateTopicsArgs");
const CreateManyTopicsArgs_1 = require("./args/CreateManyTopicsArgs");
const CreateTopicsArgs_1 = require("./args/CreateTopicsArgs");
const DeleteManyTopicsArgs_1 = require("./args/DeleteManyTopicsArgs");
const DeleteTopicsArgs_1 = require("./args/DeleteTopicsArgs");
const FindFirstTopicsArgs_1 = require("./args/FindFirstTopicsArgs");
const FindManyTopicsArgs_1 = require("./args/FindManyTopicsArgs");
const FindUniqueTopicsArgs_1 = require("./args/FindUniqueTopicsArgs");
const GroupByTopicsArgs_1 = require("./args/GroupByTopicsArgs");
const UpdateManyTopicsArgs_1 = require("./args/UpdateManyTopicsArgs");
const UpdateTopicsArgs_1 = require("./args/UpdateTopicsArgs");
const UpsertTopicsArgs_1 = require("./args/UpsertTopicsArgs");
const helpers_1 = require("../../../helpers");
const Topics_1 = require("../../../models/Topics");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTopics_1 = require("../../outputs/AggregateTopics");
const TopicsGroupBy_1 = require("../../outputs/TopicsGroupBy");
let TopicsCrudResolver = class TopicsCrudResolver {
    async findUniqueTopics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTopics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTopics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTopics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTopics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTopics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTopics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTopics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTopics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTopics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTopics(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTopics(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Topics_1.Topics, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueTopicsArgs_1.FindUniqueTopicsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TopicsCrudResolver.prototype, "findUniqueTopics", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Topics_1.Topics, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstTopicsArgs_1.FindFirstTopicsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TopicsCrudResolver.prototype, "findFirstTopics", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Topics_1.Topics], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyTopicsArgs_1.FindManyTopicsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TopicsCrudResolver.prototype, "findManyTopics", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Topics_1.Topics, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateTopicsArgs_1.CreateTopicsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TopicsCrudResolver.prototype, "createTopics", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyTopicsArgs_1.CreateManyTopicsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TopicsCrudResolver.prototype, "createManyTopics", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Topics_1.Topics, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteTopicsArgs_1.DeleteTopicsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TopicsCrudResolver.prototype, "deleteTopics", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Topics_1.Topics, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateTopicsArgs_1.UpdateTopicsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TopicsCrudResolver.prototype, "updateTopics", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyTopicsArgs_1.DeleteManyTopicsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TopicsCrudResolver.prototype, "deleteManyTopics", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyTopicsArgs_1.UpdateManyTopicsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TopicsCrudResolver.prototype, "updateManyTopics", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Topics_1.Topics, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertTopicsArgs_1.UpsertTopicsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TopicsCrudResolver.prototype, "upsertTopics", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateTopics_1.AggregateTopics, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateTopicsArgs_1.AggregateTopicsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TopicsCrudResolver.prototype, "aggregateTopics", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [TopicsGroupBy_1.TopicsGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByTopicsArgs_1.GroupByTopicsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TopicsCrudResolver.prototype, "groupByTopics", null);
TopicsCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Topics_1.Topics)
], TopicsCrudResolver);
exports.TopicsCrudResolver = TopicsCrudResolver;
