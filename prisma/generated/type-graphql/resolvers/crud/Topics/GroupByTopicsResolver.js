"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTopicsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByTopicsArgs_1 = require("./args/GroupByTopicsArgs");
const Topics_1 = require("../../../models/Topics");
const TopicsGroupBy_1 = require("../../outputs/TopicsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTopicsResolver = class GroupByTopicsResolver {
    async groupByTopics(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByTopicsResolver.prototype, "groupByTopics", null);
GroupByTopicsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Topics_1.Topics)
], GroupByTopicsResolver);
exports.GroupByTopicsResolver = GroupByTopicsResolver;
