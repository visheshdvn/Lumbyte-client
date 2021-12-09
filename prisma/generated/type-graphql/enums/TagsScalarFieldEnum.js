"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var TagsScalarFieldEnum;
(function (TagsScalarFieldEnum) {
    TagsScalarFieldEnum["id"] = "id";
    TagsScalarFieldEnum["tagname"] = "tagname";
    TagsScalarFieldEnum["color"] = "color";
    TagsScalarFieldEnum["metaDescription"] = "metaDescription";
    TagsScalarFieldEnum["ogimg"] = "ogimg";
    TagsScalarFieldEnum["ogalt"] = "ogalt";
    TagsScalarFieldEnum["created_at"] = "created_at";
    TagsScalarFieldEnum["upadted_at"] = "upadted_at";
    TagsScalarFieldEnum["published_at"] = "published_at";
    TagsScalarFieldEnum["published"] = "published";
})(TagsScalarFieldEnum = exports.TagsScalarFieldEnum || (exports.TagsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TagsScalarFieldEnum, {
    name: "TagsScalarFieldEnum",
    description: undefined,
});
