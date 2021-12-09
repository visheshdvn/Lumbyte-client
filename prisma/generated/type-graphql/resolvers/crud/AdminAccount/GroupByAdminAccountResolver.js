"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAdminAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByAdminAccountArgs_1 = require("./args/GroupByAdminAccountArgs");
const AdminAccount_1 = require("../../../models/AdminAccount");
const AdminAccountGroupBy_1 = require("../../outputs/AdminAccountGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAdminAccountResolver = class GroupByAdminAccountResolver {
    async groupByAdminAccount(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [AdminAccountGroupBy_1.AdminAccountGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByAdminAccountArgs_1.GroupByAdminAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByAdminAccountResolver.prototype, "groupByAdminAccount", null);
GroupByAdminAccountResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => AdminAccount_1.AdminAccount)
], GroupByAdminAccountResolver);
exports.GroupByAdminAccountResolver = GroupByAdminAccountResolver;
