"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccountRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdminAccount_1 = require("../../../models/AdminAccount");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let AdminAccountRelationsResolver = class AdminAccountRelationsResolver {
    async user(adminAccount, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).adminAccount.findUnique({
            where: {
                id: adminAccount.id,
            },
        }).user({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [AdminAccount_1.AdminAccount, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminAccountRelationsResolver.prototype, "user", null);
AdminAccountRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => AdminAccount_1.AdminAccount)
], AdminAccountRelationsResolver);
exports.AdminAccountRelationsResolver = AdminAccountRelationsResolver;
