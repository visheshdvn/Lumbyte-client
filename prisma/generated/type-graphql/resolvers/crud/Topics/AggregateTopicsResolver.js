"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTopicsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateTopicsArgs_1 = require("./args/AggregateTopicsArgs");
const Topics_1 = require("../../../models/Topics");
const AggregateTopics_1 = require("../../outputs/AggregateTopics");
const helpers_1 = require("../../../helpers");
let AggregateTopicsResolver = class AggregateTopicsResolver {
    async aggregateTopics(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateTopicsResolver.prototype, "aggregateTopics", null);
AggregateTopicsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Topics_1.Topics)
], AggregateTopicsResolver);
exports.AggregateTopicsResolver = AggregateTopicsResolver;
