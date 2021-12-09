"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var BlogpostsScalarFieldEnum;
(function (BlogpostsScalarFieldEnum) {
    BlogpostsScalarFieldEnum["id"] = "id";
    BlogpostsScalarFieldEnum["title"] = "title";
    BlogpostsScalarFieldEnum["slug"] = "slug";
    BlogpostsScalarFieldEnum["metaDescription"] = "metaDescription";
    BlogpostsScalarFieldEnum["excerpt"] = "excerpt";
    BlogpostsScalarFieldEnum["content"] = "content";
    BlogpostsScalarFieldEnum["banner"] = "banner";
    BlogpostsScalarFieldEnum["banneralt"] = "banneralt";
    BlogpostsScalarFieldEnum["minuteRead"] = "minuteRead";
    BlogpostsScalarFieldEnum["featured"] = "featured";
    BlogpostsScalarFieldEnum["topPick"] = "topPick";
    BlogpostsScalarFieldEnum["date"] = "date";
    BlogpostsScalarFieldEnum["authorId"] = "authorId";
    BlogpostsScalarFieldEnum["topicsId"] = "topicsId";
    BlogpostsScalarFieldEnum["created_at"] = "created_at";
    BlogpostsScalarFieldEnum["upadted_at"] = "upadted_at";
    BlogpostsScalarFieldEnum["published_at"] = "published_at";
    BlogpostsScalarFieldEnum["published"] = "published";
    BlogpostsScalarFieldEnum["blocked"] = "blocked";
})(BlogpostsScalarFieldEnum = exports.BlogpostsScalarFieldEnum || (exports.BlogpostsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BlogpostsScalarFieldEnum, {
    name: "BlogpostsScalarFieldEnum",
    description: undefined,
});
