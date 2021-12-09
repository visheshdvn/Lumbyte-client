"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTagsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateTagsArgs_1 = require("./args/AggregateTagsArgs");
const Tags_1 = require("../../../models/Tags");
const AggregateTags_1 = require("../../outputs/AggregateTags");
const helpers_1 = require("../../../helpers");
let AggregateTagsResolver = class AggregateTagsResolver {
    async aggregateTags(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateTags_1.AggregateTags, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateTagsArgs_1.AggregateTagsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateTagsResolver.prototype, "aggregateTags", null);
AggregateTagsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Tags_1.Tags)
], AggregateTagsResolver);
exports.AggregateTagsResolver = AggregateTagsResolver;
