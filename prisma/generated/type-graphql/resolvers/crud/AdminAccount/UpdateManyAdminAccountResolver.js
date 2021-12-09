"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAdminAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateManyAdminAccountArgs_1 = require("./args/UpdateManyAdminAccountArgs");
const AdminAccount_1 = require("../../../models/AdminAccount");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyAdminAccountResolver = class UpdateManyAdminAccountResolver {
    async updateManyAdminAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateManyAdminAccountResolver.prototype, "updateManyAdminAccount", null);
UpdateManyAdminAccountResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => AdminAccount_1.AdminAccount)
], UpdateManyAdminAccountResolver);
exports.UpdateManyAdminAccountResolver = UpdateManyAdminAccountResolver;
