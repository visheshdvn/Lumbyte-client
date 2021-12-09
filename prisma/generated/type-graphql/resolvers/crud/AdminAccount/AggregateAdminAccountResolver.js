"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAdminAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateAdminAccountArgs_1 = require("./args/AggregateAdminAccountArgs");
const AdminAccount_1 = require("../../../models/AdminAccount");
const AggregateAdminAccount_1 = require("../../outputs/AggregateAdminAccount");
const helpers_1 = require("../../../helpers");
let AggregateAdminAccountResolver = class AggregateAdminAccountResolver {
    async aggregateAdminAccount(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateAdminAccountResolver.prototype, "aggregateAdminAccount", null);
AggregateAdminAccountResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => AdminAccount_1.AdminAccount)
], AggregateAdminAccountResolver);
exports.AggregateAdminAccountResolver = AggregateAdminAccountResolver;
