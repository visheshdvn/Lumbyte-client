"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Account_1 = require("../../../models/Account");
const Blogposts_1 = require("../../../models/Blogposts");
const User_1 = require("../../../models/User");
const AccountSavedPostsArgs_1 = require("./args/AccountSavedPostsArgs");
const helpers_1 = require("../../../helpers");
let AccountRelationsResolver = class AccountRelationsResolver {
    async user(account, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).account.findUnique({
            where: {
                id: account.id,
            },
        }).user({});
    }
    async savedPosts(account, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).account.findUnique({
            where: {
                id: account.id,
            },
        }).savedPosts(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Account_1.Account, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AccountRelationsResolver.prototype, "user", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Blogposts_1.Blogposts], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Account_1.Account, Object, AccountSavedPostsArgs_1.AccountSavedPostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AccountRelationsResolver.prototype, "savedPosts", null);
AccountRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], AccountRelationsResolver);
exports.AccountRelationsResolver = AccountRelationsResolver;
