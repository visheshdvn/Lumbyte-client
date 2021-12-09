"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = (0, tslib_1.__importStar)(require("tslib"));
const crudResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = (0, tslib_1.__importStar)(require("./resolvers/crud/args.index"));
const actionResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = (0, tslib_1.__importStar)(require("./resolvers/relations/resolvers.index"));
const models = (0, tslib_1.__importStar)(require("./models"));
const outputTypes = (0, tslib_1.__importStar)(require("./resolvers/outputs"));
const inputTypes = (0, tslib_1.__importStar)(require("./resolvers/inputs"));
const crudResolversMap = {
    Account: crudResolvers.AccountCrudResolver,
    AdminAccount: crudResolvers.AdminAccountCrudResolver,
    Blogposts: crudResolvers.BlogpostsCrudResolver,
    Comments: crudResolvers.CommentsCrudResolver,
    User: crudResolvers.UserCrudResolver,
    Tags: crudResolvers.TagsCrudResolver,
    Topics: crudResolvers.TopicsCrudResolver
};
const actionResolversMap = {
    Account: {
        account: actionResolvers.FindUniqueAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        createAccount: actionResolvers.CreateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        deleteAccount: actionResolvers.DeleteAccountResolver,
        updateAccount: actionResolvers.UpdateAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        upsertAccount: actionResolvers.UpsertAccountResolver,
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver
    },
    AdminAccount: {
        adminAccount: actionResolvers.FindUniqueAdminAccountResolver,
        findFirstAdminAccount: actionResolvers.FindFirstAdminAccountResolver,
        adminAccounts: actionResolvers.FindManyAdminAccountResolver,
        createAdminAccount: actionResolvers.CreateAdminAccountResolver,
        createManyAdminAccount: actionResolvers.CreateManyAdminAccountResolver,
        deleteAdminAccount: actionResolvers.DeleteAdminAccountResolver,
        updateAdminAccount: actionResolvers.UpdateAdminAccountResolver,
        deleteManyAdminAccount: actionResolvers.DeleteManyAdminAccountResolver,
        updateManyAdminAccount: actionResolvers.UpdateManyAdminAccountResolver,
        upsertAdminAccount: actionResolvers.UpsertAdminAccountResolver,
        aggregateAdminAccount: actionResolvers.AggregateAdminAccountResolver,
        groupByAdminAccount: actionResolvers.GroupByAdminAccountResolver
    },
    Blogposts: {
        findUniqueBlogposts: actionResolvers.FindUniqueBlogpostsResolver,
        findFirstBlogposts: actionResolvers.FindFirstBlogpostsResolver,
        findManyBlogposts: actionResolvers.FindManyBlogpostsResolver,
        createBlogposts: actionResolvers.CreateBlogpostsResolver,
        createManyBlogposts: actionResolvers.CreateManyBlogpostsResolver,
        deleteBlogposts: actionResolvers.DeleteBlogpostsResolver,
        updateBlogposts: actionResolvers.UpdateBlogpostsResolver,
        deleteManyBlogposts: actionResolvers.DeleteManyBlogpostsResolver,
        updateManyBlogposts: actionResolvers.UpdateManyBlogpostsResolver,
        upsertBlogposts: actionResolvers.UpsertBlogpostsResolver,
        aggregateBlogposts: actionResolvers.AggregateBlogpostsResolver,
        groupByBlogposts: actionResolvers.GroupByBlogpostsResolver
    },
    Comments: {
        findUniqueComments: actionResolvers.FindUniqueCommentsResolver,
        findFirstComments: actionResolvers.FindFirstCommentsResolver,
        findManyComments: actionResolvers.FindManyCommentsResolver,
        createComments: actionResolvers.CreateCommentsResolver,
        createManyComments: actionResolvers.CreateManyCommentsResolver,
        deleteComments: actionResolvers.DeleteCommentsResolver,
        updateComments: actionResolvers.UpdateCommentsResolver,
        deleteManyComments: actionResolvers.DeleteManyCommentsResolver,
        updateManyComments: actionResolvers.UpdateManyCommentsResolver,
        upsertComments: actionResolvers.UpsertCommentsResolver,
        aggregateComments: actionResolvers.AggregateCommentsResolver,
        groupByComments: actionResolvers.GroupByCommentsResolver
    },
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    },
    Tags: {
        findUniqueTags: actionResolvers.FindUniqueTagsResolver,
        findFirstTags: actionResolvers.FindFirstTagsResolver,
        findManyTags: actionResolvers.FindManyTagsResolver,
        createTags: actionResolvers.CreateTagsResolver,
        createManyTags: actionResolvers.CreateManyTagsResolver,
        deleteTags: actionResolvers.DeleteTagsResolver,
        updateTags: actionResolvers.UpdateTagsResolver,
        deleteManyTags: actionResolvers.DeleteManyTagsResolver,
        updateManyTags: actionResolvers.UpdateManyTagsResolver,
        upsertTags: actionResolvers.UpsertTagsResolver,
        aggregateTags: actionResolvers.AggregateTagsResolver,
        groupByTags: actionResolvers.GroupByTagsResolver
    },
    Topics: {
        findUniqueTopics: actionResolvers.FindUniqueTopicsResolver,
        findFirstTopics: actionResolvers.FindFirstTopicsResolver,
        findManyTopics: actionResolvers.FindManyTopicsResolver,
        createTopics: actionResolvers.CreateTopicsResolver,
        createManyTopics: actionResolvers.CreateManyTopicsResolver,
        deleteTopics: actionResolvers.DeleteTopicsResolver,
        updateTopics: actionResolvers.UpdateTopicsResolver,
        deleteManyTopics: actionResolvers.DeleteManyTopicsResolver,
        updateManyTopics: actionResolvers.UpdateManyTopicsResolver,
        upsertTopics: actionResolvers.UpsertTopicsResolver,
        aggregateTopics: actionResolvers.AggregateTopicsResolver,
        groupByTopics: actionResolvers.GroupByTopicsResolver
    }
};
const crudResolversInfo = {
    Account: ["account", "findFirstAccount", "accounts", "createAccount", "createManyAccount", "deleteAccount", "updateAccount", "deleteManyAccount", "updateManyAccount", "upsertAccount", "aggregateAccount", "groupByAccount"],
    AdminAccount: ["adminAccount", "findFirstAdminAccount", "adminAccounts", "createAdminAccount", "createManyAdminAccount", "deleteAdminAccount", "updateAdminAccount", "deleteManyAdminAccount", "updateManyAdminAccount", "upsertAdminAccount", "aggregateAdminAccount", "groupByAdminAccount"],
    Blogposts: ["findUniqueBlogposts", "findFirstBlogposts", "findManyBlogposts", "createBlogposts", "createManyBlogposts", "deleteBlogposts", "updateBlogposts", "deleteManyBlogposts", "updateManyBlogposts", "upsertBlogposts", "aggregateBlogposts", "groupByBlogposts"],
    Comments: ["findUniqueComments", "findFirstComments", "findManyComments", "createComments", "createManyComments", "deleteComments", "updateComments", "deleteManyComments", "updateManyComments", "upsertComments", "aggregateComments", "groupByComments"],
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
    Tags: ["findUniqueTags", "findFirstTags", "findManyTags", "createTags", "createManyTags", "deleteTags", "updateTags", "deleteManyTags", "updateManyTags", "upsertTags", "aggregateTags", "groupByTags"],
    Topics: ["findUniqueTopics", "findFirstTopics", "findManyTopics", "createTopics", "createManyTopics", "deleteTopics", "updateTopics", "deleteManyTopics", "updateManyTopics", "upsertTopics", "aggregateTopics", "groupByTopics"]
};
const argsInfo = {
    FindUniqueAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAccountArgs: ["data"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    DeleteAccountArgs: ["where"],
    UpdateAccountArgs: ["data", "where"],
    DeleteManyAccountArgs: ["where"],
    UpdateManyAccountArgs: ["data", "where"],
    UpsertAccountArgs: ["where", "create", "update"],
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueAdminAccountArgs: ["where"],
    FindFirstAdminAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAdminAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAdminAccountArgs: ["data"],
    CreateManyAdminAccountArgs: ["data", "skipDuplicates"],
    DeleteAdminAccountArgs: ["where"],
    UpdateAdminAccountArgs: ["data", "where"],
    DeleteManyAdminAccountArgs: ["where"],
    UpdateManyAdminAccountArgs: ["data", "where"],
    UpsertAdminAccountArgs: ["where", "create", "update"],
    AggregateAdminAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAdminAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueBlogpostsArgs: ["where"],
    FindFirstBlogpostsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBlogpostsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateBlogpostsArgs: ["data"],
    CreateManyBlogpostsArgs: ["data", "skipDuplicates"],
    DeleteBlogpostsArgs: ["where"],
    UpdateBlogpostsArgs: ["data", "where"],
    DeleteManyBlogpostsArgs: ["where"],
    UpdateManyBlogpostsArgs: ["data", "where"],
    UpsertBlogpostsArgs: ["where", "create", "update"],
    AggregateBlogpostsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByBlogpostsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueCommentsArgs: ["where"],
    FindFirstCommentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCommentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateCommentsArgs: ["data"],
    CreateManyCommentsArgs: ["data", "skipDuplicates"],
    DeleteCommentsArgs: ["where"],
    UpdateCommentsArgs: ["data", "where"],
    DeleteManyCommentsArgs: ["where"],
    UpdateManyCommentsArgs: ["data", "where"],
    UpsertCommentsArgs: ["where", "create", "update"],
    AggregateCommentsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByCommentsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueTagsArgs: ["where"],
    FindFirstTagsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTagsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateTagsArgs: ["data"],
    CreateManyTagsArgs: ["data", "skipDuplicates"],
    DeleteTagsArgs: ["where"],
    UpdateTagsArgs: ["data", "where"],
    DeleteManyTagsArgs: ["where"],
    UpdateManyTagsArgs: ["data", "where"],
    UpsertTagsArgs: ["where", "create", "update"],
    AggregateTagsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByTagsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueTopicsArgs: ["where"],
    FindFirstTopicsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTopicsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateTopicsArgs: ["data"],
    CreateManyTopicsArgs: ["data", "skipDuplicates"],
    DeleteTopicsArgs: ["where"],
    UpdateTopicsArgs: ["data", "where"],
    DeleteManyTopicsArgs: ["where"],
    UpdateManyTopicsArgs: ["data", "where"],
    UpsertTopicsArgs: ["where", "create", "update"],
    AggregateTopicsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByTopicsArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Account: relationResolvers.AccountRelationsResolver,
    AdminAccount: relationResolvers.AdminAccountRelationsResolver,
    Blogposts: relationResolvers.BlogpostsRelationsResolver,
    User: relationResolvers.UserRelationsResolver,
    Tags: relationResolvers.TagsRelationsResolver,
    Topics: relationResolvers.TopicsRelationsResolver
};
const relationResolversInfo = {
    Account: ["user", "savedPosts"],
    AdminAccount: ["user"],
    Blogposts: ["author", "topics", "tags", "savedBy"],
    User: ["blogposts", "publicAccount", "adminAccount"],
    Tags: ["blogposts"],
    Topics: ["blogposts"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Account: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "userId", "created_at", "upadted_at", "disabled"],
    AdminAccount: ["id", "password", "userId", "created_at", "upadted_at", "restricted"],
    Blogposts: ["id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "authorId", "topicsId", "created_at", "upadted_at", "published_at", "published", "blocked"],
    Comments: ["id", "content", "created_at", "upadted_at"],
    User: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant"],
    Tags: ["id", "tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    Topics: ["id", "topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateAccount: ["_count", "_min", "_max"],
    AccountGroupBy: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "userId", "created_at", "upadted_at", "disabled", "_count", "_min", "_max"],
    AggregateAdminAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AdminAccountGroupBy: ["id", "password", "userId", "created_at", "upadted_at", "restricted", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateBlogposts: ["_count", "_avg", "_sum", "_min", "_max"],
    BlogpostsGroupBy: ["id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "authorId", "topicsId", "created_at", "upadted_at", "published_at", "published", "blocked", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateComments: ["_count", "_avg", "_sum", "_min", "_max"],
    CommentsGroupBy: ["id", "content", "created_at", "upadted_at", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant", "_count", "_min", "_max"],
    AggregateTags: ["_count", "_avg", "_sum", "_min", "_max"],
    TagsGroupBy: ["id", "tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateTopics: ["_count", "_avg", "_sum", "_min", "_max"],
    TopicsGroupBy: ["id", "topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AccountCount: ["savedPosts"],
    AccountCountAggregate: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "userId", "created_at", "upadted_at", "disabled", "_all"],
    AccountMinAggregate: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "userId", "created_at", "upadted_at", "disabled"],
    AccountMaxAggregate: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "userId", "created_at", "upadted_at", "disabled"],
    AdminAccountCountAggregate: ["id", "password", "userId", "created_at", "upadted_at", "restricted", "_all"],
    AdminAccountAvgAggregate: ["id"],
    AdminAccountSumAggregate: ["id"],
    AdminAccountMinAggregate: ["id", "password", "userId", "created_at", "upadted_at", "restricted"],
    AdminAccountMaxAggregate: ["id", "password", "userId", "created_at", "upadted_at", "restricted"],
    BlogpostsCount: ["tags", "savedBy"],
    BlogpostsCountAggregate: ["id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "authorId", "topicsId", "created_at", "upadted_at", "published_at", "published", "blocked", "_all"],
    BlogpostsAvgAggregate: ["id", "minuteRead", "topicsId"],
    BlogpostsSumAggregate: ["id", "minuteRead", "topicsId"],
    BlogpostsMinAggregate: ["id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "authorId", "topicsId", "created_at", "upadted_at", "published_at", "published", "blocked"],
    BlogpostsMaxAggregate: ["id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "authorId", "topicsId", "created_at", "upadted_at", "published_at", "published", "blocked"],
    CommentsCountAggregate: ["id", "content", "created_at", "upadted_at", "_all"],
    CommentsAvgAggregate: ["id"],
    CommentsSumAggregate: ["id"],
    CommentsMinAggregate: ["id", "content", "created_at", "upadted_at"],
    CommentsMaxAggregate: ["id", "content", "created_at", "upadted_at"],
    UserCount: ["blogposts"],
    UserCountAggregate: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant", "_all"],
    UserMinAggregate: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant"],
    UserMaxAggregate: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant"],
    TagsCount: ["blogposts"],
    TagsCountAggregate: ["id", "tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published", "_all"],
    TagsAvgAggregate: ["id"],
    TagsSumAggregate: ["id"],
    TagsMinAggregate: ["id", "tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TagsMaxAggregate: ["id", "tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TopicsCount: ["blogposts"],
    TopicsCountAggregate: ["id", "topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published", "_all"],
    TopicsAvgAggregate: ["id"],
    TopicsSumAggregate: ["id"],
    TopicsMinAggregate: ["id", "topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TopicsMaxAggregate: ["id", "topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    AccountWhereInput: ["AND", "OR", "NOT", "id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "user", "userId", "savedPosts", "created_at", "upadted_at", "disabled"],
    AccountOrderByWithRelationInput: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "user", "userId", "savedPosts", "created_at", "upadted_at", "disabled"],
    AccountWhereUniqueInput: ["id", "userId"],
    AccountOrderByWithAggregationInput: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "userId", "created_at", "upadted_at", "disabled", "_count", "_max", "_min"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "userId", "created_at", "upadted_at", "disabled"],
    AdminAccountWhereInput: ["AND", "OR", "NOT", "id", "password", "user", "userId", "created_at", "upadted_at", "restricted"],
    AdminAccountOrderByWithRelationInput: ["id", "password", "user", "userId", "created_at", "upadted_at", "restricted"],
    AdminAccountWhereUniqueInput: ["id", "userId"],
    AdminAccountOrderByWithAggregationInput: ["id", "password", "userId", "created_at", "upadted_at", "restricted", "_count", "_avg", "_max", "_min", "_sum"],
    AdminAccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "password", "userId", "created_at", "upadted_at", "restricted"],
    BlogpostsWhereInput: ["AND", "OR", "NOT", "id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "author", "authorId", "topics", "topicsId", "tags", "savedBy", "created_at", "upadted_at", "published_at", "published", "blocked"],
    BlogpostsOrderByWithRelationInput: ["id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "author", "authorId", "topics", "topicsId", "tags", "savedBy", "created_at", "upadted_at", "published_at", "published", "blocked"],
    BlogpostsWhereUniqueInput: ["id", "slug", "content"],
    BlogpostsOrderByWithAggregationInput: ["id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "authorId", "topicsId", "created_at", "upadted_at", "published_at", "published", "blocked", "_count", "_avg", "_max", "_min", "_sum"],
    BlogpostsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "authorId", "topicsId", "created_at", "upadted_at", "published_at", "published", "blocked"],
    CommentsWhereInput: ["AND", "OR", "NOT", "id", "content", "created_at", "upadted_at"],
    CommentsOrderByWithRelationInput: ["id", "content", "created_at", "upadted_at"],
    CommentsWhereUniqueInput: ["id"],
    CommentsOrderByWithAggregationInput: ["id", "content", "created_at", "upadted_at", "_count", "_avg", "_max", "_min", "_sum"],
    CommentsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "content", "created_at", "upadted_at"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "blogposts", "publicAccount", "adminAccount", "created_at", "upadted_at", "adminGrant"],
    UserOrderByWithRelationInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "blogposts", "publicAccount", "adminAccount", "created_at", "upadted_at", "adminGrant"],
    UserWhereUniqueInput: ["id", "username", "email", "phone"],
    UserOrderByWithAggregationInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant"],
    TagsWhereInput: ["AND", "OR", "NOT", "id", "tagname", "color", "metaDescription", "ogimg", "ogalt", "blogposts", "created_at", "upadted_at", "published_at", "published"],
    TagsOrderByWithRelationInput: ["id", "tagname", "color", "metaDescription", "ogimg", "ogalt", "blogposts", "created_at", "upadted_at", "published_at", "published"],
    TagsWhereUniqueInput: ["id", "tagname"],
    TagsOrderByWithAggregationInput: ["id", "tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published", "_count", "_avg", "_max", "_min", "_sum"],
    TagsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TopicsWhereInput: ["AND", "OR", "NOT", "id", "topicname", "metaDescription", "ogimg", "ogalt", "blogposts", "created_at", "upadted_at", "published_at", "published"],
    TopicsOrderByWithRelationInput: ["id", "topicname", "metaDescription", "ogimg", "ogalt", "blogposts", "created_at", "upadted_at", "published_at", "published"],
    TopicsWhereUniqueInput: ["id", "topicname"],
    TopicsOrderByWithAggregationInput: ["id", "topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published", "_count", "_avg", "_max", "_min", "_sum"],
    TopicsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    AccountCreateInput: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "created_at", "upadted_at", "disabled", "user", "savedPosts"],
    AccountUpdateInput: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "created_at", "upadted_at", "disabled", "user", "savedPosts"],
    AccountCreateManyInput: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "userId", "created_at", "upadted_at", "disabled"],
    AccountUpdateManyMutationInput: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "created_at", "upadted_at", "disabled"],
    AdminAccountCreateInput: ["password", "created_at", "upadted_at", "restricted", "user"],
    AdminAccountUpdateInput: ["password", "created_at", "upadted_at", "restricted", "user"],
    AdminAccountCreateManyInput: ["id", "password", "userId", "created_at", "upadted_at", "restricted"],
    AdminAccountUpdateManyMutationInput: ["password", "created_at", "upadted_at", "restricted"],
    BlogpostsCreateInput: ["title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "created_at", "upadted_at", "published_at", "published", "blocked", "author", "topics", "tags", "savedBy"],
    BlogpostsUpdateInput: ["title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "created_at", "upadted_at", "published_at", "published", "blocked", "author", "topics", "tags", "savedBy"],
    BlogpostsCreateManyInput: ["id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "authorId", "topicsId", "created_at", "upadted_at", "published_at", "published", "blocked"],
    BlogpostsUpdateManyMutationInput: ["title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "created_at", "upadted_at", "published_at", "published", "blocked"],
    CommentsCreateInput: ["content", "created_at", "upadted_at"],
    CommentsUpdateInput: ["content", "created_at", "upadted_at"],
    CommentsCreateManyInput: ["id", "content", "created_at", "upadted_at"],
    CommentsUpdateManyMutationInput: ["content", "created_at", "upadted_at"],
    UserCreateInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant", "blogposts", "publicAccount", "adminAccount"],
    UserUpdateInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant", "blogposts", "publicAccount", "adminAccount"],
    UserCreateManyInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant"],
    UserUpdateManyMutationInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant"],
    TagsCreateInput: ["tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published", "blogposts"],
    TagsUpdateInput: ["tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published", "blogposts"],
    TagsCreateManyInput: ["id", "tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TagsUpdateManyMutationInput: ["tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TopicsCreateInput: ["topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published", "blogposts"],
    TopicsUpdateInput: ["topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published", "blogposts"],
    TopicsCreateManyInput: ["id", "topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TopicsUpdateManyMutationInput: ["topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    UserRelationFilter: ["is", "isNot"],
    BlogpostsListRelationFilter: ["every", "some", "none"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BoolFilter: ["equals", "not"],
    BlogpostsOrderByRelationAggregateInput: ["_count"],
    AccountCountOrderByAggregateInput: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "userId", "created_at", "upadted_at", "disabled"],
    AccountMaxOrderByAggregateInput: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "userId", "created_at", "upadted_at", "disabled"],
    AccountMinOrderByAggregateInput: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "userId", "created_at", "upadted_at", "disabled"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AdminAccountCountOrderByAggregateInput: ["id", "password", "userId", "created_at", "upadted_at", "restricted"],
    AdminAccountAvgOrderByAggregateInput: ["id"],
    AdminAccountMaxOrderByAggregateInput: ["id", "password", "userId", "created_at", "upadted_at", "restricted"],
    AdminAccountMinOrderByAggregateInput: ["id", "password", "userId", "created_at", "upadted_at", "restricted"],
    AdminAccountSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BoolNullableFilter: ["equals", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    TopicsRelationFilter: ["is", "isNot"],
    TagsListRelationFilter: ["every", "some", "none"],
    AccountListRelationFilter: ["every", "some", "none"],
    TagsOrderByRelationAggregateInput: ["_count"],
    AccountOrderByRelationAggregateInput: ["_count"],
    BlogpostsCountOrderByAggregateInput: ["id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "authorId", "topicsId", "created_at", "upadted_at", "published_at", "published", "blocked"],
    BlogpostsAvgOrderByAggregateInput: ["id", "minuteRead", "topicsId"],
    BlogpostsMaxOrderByAggregateInput: ["id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "authorId", "topicsId", "created_at", "upadted_at", "published_at", "published", "blocked"],
    BlogpostsMinOrderByAggregateInput: ["id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "authorId", "topicsId", "created_at", "upadted_at", "published_at", "published", "blocked"],
    BlogpostsSumOrderByAggregateInput: ["id", "minuteRead", "topicsId"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    CommentsCountOrderByAggregateInput: ["id", "content", "created_at", "upadted_at"],
    CommentsAvgOrderByAggregateInput: ["id"],
    CommentsMaxOrderByAggregateInput: ["id", "content", "created_at", "upadted_at"],
    CommentsMinOrderByAggregateInput: ["id", "content", "created_at", "upadted_at"],
    CommentsSumOrderByAggregateInput: ["id"],
    AccountRelationFilter: ["is", "isNot"],
    AdminAccountRelationFilter: ["is", "isNot"],
    UserCountOrderByAggregateInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant"],
    UserMaxOrderByAggregateInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant"],
    UserMinOrderByAggregateInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant"],
    TagsCountOrderByAggregateInput: ["id", "tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TagsAvgOrderByAggregateInput: ["id"],
    TagsMaxOrderByAggregateInput: ["id", "tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TagsMinOrderByAggregateInput: ["id", "tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TagsSumOrderByAggregateInput: ["id"],
    TopicsCountOrderByAggregateInput: ["id", "topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TopicsAvgOrderByAggregateInput: ["id"],
    TopicsMaxOrderByAggregateInput: ["id", "topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TopicsMinOrderByAggregateInput: ["id", "topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TopicsSumOrderByAggregateInput: ["id"],
    UserCreateNestedOneWithoutPublicAccountInput: ["create", "connectOrCreate", "connect"],
    BlogpostsCreateNestedManyWithoutSavedByInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    BoolFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutPublicAccountInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    BlogpostsUpdateManyWithoutSavedByInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutAdminAccountInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutAdminAccountInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserCreateNestedOneWithoutBlogpostsInput: ["create", "connectOrCreate", "connect"],
    TopicsCreateNestedOneWithoutBlogpostsInput: ["create", "connectOrCreate", "connect"],
    TagsCreateNestedManyWithoutBlogpostsInput: ["create", "connectOrCreate", "connect"],
    AccountCreateNestedManyWithoutSavedPostsInput: ["create", "connectOrCreate", "connect"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NullableBoolFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    UserUpdateOneWithoutBlogpostsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    TopicsUpdateOneWithoutBlogpostsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    TagsUpdateManyWithoutBlogpostsInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AccountUpdateManyWithoutSavedPostsInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    BlogpostsCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
    AccountCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
    AdminAccountCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
    BlogpostsUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AccountUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    AdminAccountUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    BlogpostsCreateNestedManyWithoutTagsInput: ["create", "connectOrCreate", "connect"],
    BlogpostsUpdateManyWithoutTagsInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    BlogpostsCreateNestedManyWithoutTopicsInput: ["create", "connectOrCreate", "createMany", "connect"],
    BlogpostsUpdateManyWithoutTopicsInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolNullableFilter: ["equals", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    UserCreateWithoutPublicAccountInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant", "blogposts", "adminAccount"],
    UserCreateOrConnectWithoutPublicAccountInput: ["where", "create"],
    BlogpostsCreateWithoutSavedByInput: ["title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "created_at", "upadted_at", "published_at", "published", "blocked", "author", "topics", "tags"],
    BlogpostsCreateOrConnectWithoutSavedByInput: ["where", "create"],
    UserUpsertWithoutPublicAccountInput: ["update", "create"],
    UserUpdateWithoutPublicAccountInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant", "blogposts", "adminAccount"],
    BlogpostsUpsertWithWhereUniqueWithoutSavedByInput: ["where", "update", "create"],
    BlogpostsUpdateWithWhereUniqueWithoutSavedByInput: ["where", "data"],
    BlogpostsUpdateManyWithWhereWithoutSavedByInput: ["where", "data"],
    BlogpostsScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "authorId", "topicsId", "created_at", "upadted_at", "published_at", "published", "blocked"],
    UserCreateWithoutAdminAccountInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant", "blogposts", "publicAccount"],
    UserCreateOrConnectWithoutAdminAccountInput: ["where", "create"],
    UserUpsertWithoutAdminAccountInput: ["update", "create"],
    UserUpdateWithoutAdminAccountInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant", "blogposts", "publicAccount"],
    UserCreateWithoutBlogpostsInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant", "publicAccount", "adminAccount"],
    UserCreateOrConnectWithoutBlogpostsInput: ["where", "create"],
    TopicsCreateWithoutBlogpostsInput: ["topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TopicsCreateOrConnectWithoutBlogpostsInput: ["where", "create"],
    TagsCreateWithoutBlogpostsInput: ["tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TagsCreateOrConnectWithoutBlogpostsInput: ["where", "create"],
    AccountCreateWithoutSavedPostsInput: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "created_at", "upadted_at", "disabled", "user"],
    AccountCreateOrConnectWithoutSavedPostsInput: ["where", "create"],
    UserUpsertWithoutBlogpostsInput: ["update", "create"],
    UserUpdateWithoutBlogpostsInput: ["id", "firstname", "lastname", "username", "about", "dp", "dpalt", "email", "phone", "role", "created_at", "upadted_at", "adminGrant", "publicAccount", "adminAccount"],
    TopicsUpsertWithoutBlogpostsInput: ["update", "create"],
    TopicsUpdateWithoutBlogpostsInput: ["topicname", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    TagsUpsertWithWhereUniqueWithoutBlogpostsInput: ["where", "update", "create"],
    TagsUpdateWithWhereUniqueWithoutBlogpostsInput: ["where", "data"],
    TagsUpdateManyWithWhereWithoutBlogpostsInput: ["where", "data"],
    TagsScalarWhereInput: ["AND", "OR", "NOT", "id", "tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    AccountUpsertWithWhereUniqueWithoutSavedPostsInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutSavedPostsInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutSavedPostsInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "userId", "created_at", "upadted_at", "disabled"],
    BlogpostsCreateWithoutAuthorInput: ["title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "created_at", "upadted_at", "published_at", "published", "blocked", "topics", "tags", "savedBy"],
    BlogpostsCreateOrConnectWithoutAuthorInput: ["where", "create"],
    BlogpostsCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
    AccountCreateWithoutUserInput: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "created_at", "upadted_at", "disabled", "savedPosts"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AdminAccountCreateWithoutUserInput: ["password", "created_at", "upadted_at", "restricted"],
    AdminAccountCreateOrConnectWithoutUserInput: ["where", "create"],
    BlogpostsUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
    BlogpostsUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
    BlogpostsUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
    AccountUpsertWithoutUserInput: ["update", "create"],
    AccountUpdateWithoutUserInput: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "created_at", "upadted_at", "disabled", "savedPosts"],
    AdminAccountUpsertWithoutUserInput: ["update", "create"],
    AdminAccountUpdateWithoutUserInput: ["password", "created_at", "upadted_at", "restricted"],
    BlogpostsCreateWithoutTagsInput: ["title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "created_at", "upadted_at", "published_at", "published", "blocked", "author", "topics", "savedBy"],
    BlogpostsCreateOrConnectWithoutTagsInput: ["where", "create"],
    BlogpostsUpsertWithWhereUniqueWithoutTagsInput: ["where", "update", "create"],
    BlogpostsUpdateWithWhereUniqueWithoutTagsInput: ["where", "data"],
    BlogpostsUpdateManyWithWhereWithoutTagsInput: ["where", "data"],
    BlogpostsCreateWithoutTopicsInput: ["title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "created_at", "upadted_at", "published_at", "published", "blocked", "author", "tags", "savedBy"],
    BlogpostsCreateOrConnectWithoutTopicsInput: ["where", "create"],
    BlogpostsCreateManyTopicsInputEnvelope: ["data", "skipDuplicates"],
    BlogpostsUpsertWithWhereUniqueWithoutTopicsInput: ["where", "update", "create"],
    BlogpostsUpdateWithWhereUniqueWithoutTopicsInput: ["where", "data"],
    BlogpostsUpdateManyWithWhereWithoutTopicsInput: ["where", "data"],
    BlogpostsUpdateWithoutSavedByInput: ["title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "created_at", "upadted_at", "published_at", "published", "blocked", "author", "topics", "tags"],
    TagsUpdateWithoutBlogpostsInput: ["tagname", "color", "metaDescription", "ogimg", "ogalt", "created_at", "upadted_at", "published_at", "published"],
    AccountUpdateWithoutSavedPostsInput: ["id", "password", "facebook", "twitter", "instagram", "linkedin", "github", "behance", "pintrest", "eyeem", "px365", "created_at", "upadted_at", "disabled", "user"],
    BlogpostsCreateManyAuthorInput: ["id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "topicsId", "created_at", "upadted_at", "published_at", "published", "blocked"],
    BlogpostsUpdateWithoutAuthorInput: ["title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "created_at", "upadted_at", "published_at", "published", "blocked", "topics", "tags", "savedBy"],
    BlogpostsUpdateWithoutTagsInput: ["title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "created_at", "upadted_at", "published_at", "published", "blocked", "author", "topics", "savedBy"],
    BlogpostsCreateManyTopicsInput: ["id", "title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "authorId", "created_at", "upadted_at", "published_at", "published", "blocked"],
    BlogpostsUpdateWithoutTopicsInput: ["title", "slug", "metaDescription", "excerpt", "content", "banner", "banneralt", "minuteRead", "featured", "topPick", "date", "created_at", "upadted_at", "published_at", "published", "blocked", "author", "tags", "savedBy"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
