"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTagsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstTagsArgs_1 = require("./args/FindFirstTagsArgs");
const Tags_1 = require("../../../models/Tags");
const helpers_1 = require("../../../helpers");
let FindFirstTagsResolver = class FindFirstTagsResolver {
    async findFirstTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.findFirst({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstTagsArgs_1.FindFirstTagsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstTagsResolver.prototype, "findFirstTags", null);
FindFirstTagsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Tags_1.Tags)
], FindFirstTagsResolver);
exports.FindFirstTagsResolver = FindFirstTagsResolver;
