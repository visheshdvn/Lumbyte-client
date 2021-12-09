"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Account_1 = require("../../../models/Account");
const AdminAccount_1 = require("../../../models/AdminAccount");
const Blogposts_1 = require("../../../models/Blogposts");
const User_1 = require("../../../models/User");
const UserBlogpostsArgs_1 = require("./args/UserBlogpostsArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
    async blogposts(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).blogposts(args);
    }
    async publicAccount(user, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).publicAccount({});
    }
    async adminAccount(user, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).adminAccount({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Blogposts_1.Blogposts], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [User_1.User, Object, UserBlogpostsArgs_1.UserBlogpostsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserRelationsResolver.prototype, "blogposts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Account_1.Account, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [User_1.User, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserRelationsResolver.prototype, "publicAccount", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => AdminAccount_1.AdminAccount, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [User_1.User, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserRelationsResolver.prototype, "adminAccount", null);
UserRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);
exports.UserRelationsResolver = UserRelationsResolver;
