"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBlogpostsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateBlogpostsArgs_1 = require("./args/AggregateBlogpostsArgs");
const Blogposts_1 = require("../../../models/Blogposts");
const AggregateBlogposts_1 = require("../../outputs/AggregateBlogposts");
const helpers_1 = require("../../../helpers");
let AggregateBlogpostsResolver = class AggregateBlogpostsResolver {
    async aggregateBlogposts(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).blogposts.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateBlogpostsResolver.prototype, "aggregateBlogposts", null);
AggregateBlogpostsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Blogposts_1.Blogposts)
], AggregateBlogpostsResolver);
exports.AggregateBlogpostsResolver = AggregateBlogpostsResolver;
