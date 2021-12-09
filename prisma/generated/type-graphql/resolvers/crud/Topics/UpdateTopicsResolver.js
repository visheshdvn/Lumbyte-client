"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTopicsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateTopicsArgs_1 = require("./args/UpdateTopicsArgs");
const Topics_1 = require("../../../models/Topics");
const helpers_1 = require("../../../helpers");
let UpdateTopicsResolver = class UpdateTopicsResolver {
    async updateTopics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topics.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateTopicsResolver.prototype, "updateTopics", null);
UpdateTopicsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Topics_1.Topics)
], UpdateTopicsResolver);
exports.UpdateTopicsResolver = UpdateTopicsResolver;
