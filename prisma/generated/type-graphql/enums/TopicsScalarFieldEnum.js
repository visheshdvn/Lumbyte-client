"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var TopicsScalarFieldEnum;
(function (TopicsScalarFieldEnum) {
    TopicsScalarFieldEnum["id"] = "id";
    TopicsScalarFieldEnum["topicname"] = "topicname";
    TopicsScalarFieldEnum["metaDescription"] = "metaDescription";
    TopicsScalarFieldEnum["ogimg"] = "ogimg";
    TopicsScalarFieldEnum["ogalt"] = "ogalt";
    TopicsScalarFieldEnum["created_at"] = "created_at";
    TopicsScalarFieldEnum["upadted_at"] = "upadted_at";
    TopicsScalarFieldEnum["published_at"] = "published_at";
    TopicsScalarFieldEnum["published"] = "published";
})(TopicsScalarFieldEnum = exports.TopicsScalarFieldEnum || (exports.TopicsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TopicsScalarFieldEnum, {
    name: "TopicsScalarFieldEnum",
    description: undefined,
});
