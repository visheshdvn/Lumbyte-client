"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAdminAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyAdminAccountArgs_1 = require("./args/FindManyAdminAccountArgs");
const AdminAccount_1 = require("../../../models/AdminAccount");
const helpers_1 = require("../../../helpers");
let FindManyAdminAccountResolver = class FindManyAdminAccountResolver {
    async adminAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [AdminAccount_1.AdminAccount], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyAdminAccountArgs_1.FindManyAdminAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindManyAdminAccountResolver.prototype, "adminAccounts", null);
FindManyAdminAccountResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => AdminAccount_1.AdminAccount)
], FindManyAdminAccountResolver);
exports.FindManyAdminAccountResolver = FindManyAdminAccountResolver;
