"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateAdminAccountArgs_1 = require("./args/AggregateAdminAccountArgs");
const CreateAdminAccountArgs_1 = require("./args/CreateAdminAccountArgs");
const CreateManyAdminAccountArgs_1 = require("./args/CreateManyAdminAccountArgs");
const DeleteAdminAccountArgs_1 = require("./args/DeleteAdminAccountArgs");
const DeleteManyAdminAccountArgs_1 = require("./args/DeleteManyAdminAccountArgs");
const FindFirstAdminAccountArgs_1 = require("./args/FindFirstAdminAccountArgs");
const FindManyAdminAccountArgs_1 = require("./args/FindManyAdminAccountArgs");
const FindUniqueAdminAccountArgs_1 = require("./args/FindUniqueAdminAccountArgs");
const GroupByAdminAccountArgs_1 = require("./args/GroupByAdminAccountArgs");
const UpdateAdminAccountArgs_1 = require("./args/UpdateAdminAccountArgs");
const UpdateManyAdminAccountArgs_1 = require("./args/UpdateManyAdminAccountArgs");
const UpsertAdminAccountArgs_1 = require("./args/UpsertAdminAccountArgs");
const helpers_1 = require("../../../helpers");
const AdminAccount_1 = require("../../../models/AdminAccount");
const AdminAccountGroupBy_1 = require("../../outputs/AdminAccountGroupBy");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAdminAccount_1 = require("../../outputs/AggregateAdminAccount");
let AdminAccountCrudResolver = class AdminAccountCrudResolver {
    async adminAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAdminAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async adminAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAdminAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAdminAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAdminAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAdminAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAdminAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAdminAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAdminAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAdminAccount(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAdminAccount(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AdminAccount_1.AdminAccount, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueAdminAccountArgs_1.FindUniqueAdminAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminAccountCrudResolver.prototype, "adminAccount", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AdminAccount_1.AdminAccount, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstAdminAccountArgs_1.FindFirstAdminAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminAccountCrudResolver.prototype, "findFirstAdminAccount", null);
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
], AdminAccountCrudResolver.prototype, "adminAccounts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AdminAccount_1.AdminAccount, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateAdminAccountArgs_1.CreateAdminAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminAccountCrudResolver.prototype, "createAdminAccount", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyAdminAccountArgs_1.CreateManyAdminAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminAccountCrudResolver.prototype, "createManyAdminAccount", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AdminAccount_1.AdminAccount, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteAdminAccountArgs_1.DeleteAdminAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminAccountCrudResolver.prototype, "deleteAdminAccount", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AdminAccount_1.AdminAccount, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateAdminAccountArgs_1.UpdateAdminAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminAccountCrudResolver.prototype, "updateAdminAccount", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyAdminAccountArgs_1.DeleteManyAdminAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminAccountCrudResolver.prototype, "deleteManyAdminAccount", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyAdminAccountArgs_1.UpdateManyAdminAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminAccountCrudResolver.prototype, "updateManyAdminAccount", null);
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
], AdminAccountCrudResolver.prototype, "upsertAdminAccount", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateAdminAccount_1.AggregateAdminAccount, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateAdminAccountArgs_1.AggregateAdminAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminAccountCrudResolver.prototype, "aggregateAdminAccount", null);
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
], AdminAccountCrudResolver.prototype, "groupByAdminAccount", null);
AdminAccountCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => AdminAccount_1.AdminAccount)
], AdminAccountCrudResolver);
exports.AdminAccountCrudResolver = AdminAccountCrudResolver;
