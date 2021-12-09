"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTopicsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyTopicsArgs_1 = require("./args/FindManyTopicsArgs");
const Topics_1 = require("../../../models/Topics");
const helpers_1 = require("../../../helpers");
let FindManyTopicsResolver = class FindManyTopicsResolver {
    async findManyTopics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyTopicsResolver.prototype, "findManyTopics", null);
FindManyTopicsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Topics_1.Topics)
], FindManyTopicsResolver);
exports.FindManyTopicsResolver = FindManyTopicsResolver;
