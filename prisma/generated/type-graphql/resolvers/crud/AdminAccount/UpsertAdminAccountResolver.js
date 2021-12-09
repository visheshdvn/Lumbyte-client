"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAdminAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpsertAdminAccountArgs_1 = require("./args/UpsertAdminAccountArgs");
const AdminAccount_1 = require("../../../models/AdminAccount");
const helpers_1 = require("../../../helpers");
let UpsertAdminAccountResolver = class UpsertAdminAccountResolver {
    async upsertAdminAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AdminAccount_1.AdminAccount, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertAdminAccountArgs_1.UpsertAdminAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpsertAdminAccountResolver.prototype, "upsertAdminAccount", null);
UpsertAdminAccountResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => AdminAccount_1.AdminAccount)
], UpsertAdminAccountResolver);
exports.UpsertAdminAccountResolver = UpsertAdminAccountResolver;
