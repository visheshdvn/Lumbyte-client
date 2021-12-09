"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTagsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindUniqueTagsArgs_1 = require("./args/FindUniqueTagsArgs");
const Tags_1 = require("../../../models/Tags");
const helpers_1 = require("../../../helpers");
let FindUniqueTagsResolver = class FindUniqueTagsResolver {
    async findUniqueTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Tags_1.Tags, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueTagsArgs_1.FindUniqueTagsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindUniqueTagsResolver.prototype, "findUniqueTags", null);
FindUniqueTagsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Tags_1.Tags)
], FindUniqueTagsResolver);
exports.FindUniqueTagsResolver = FindUniqueTagsResolver;
