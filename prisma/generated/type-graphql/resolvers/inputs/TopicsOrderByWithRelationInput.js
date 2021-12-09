"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsOrderByRelationAggregateInput_1 = require("../inputs/BlogpostsOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TopicsOrderByWithRelationInput = class TopicsOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithRelationInput.prototype, "topicname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithRelationInput.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithRelationInput.prototype, "ogimg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithRelationInput.prototype, "ogalt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsOrderByRelationAggregateInput_1.BlogpostsOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsOrderByRelationAggregateInput_1.BlogpostsOrderByRelationAggregateInput)
], TopicsOrderByWithRelationInput.prototype, "blogposts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithRelationInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithRelationInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithRelationInput.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithRelationInput.prototype, "published", void 0);
TopicsOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TopicsOrderByWithRelationInput", {
        isAbstract: true
    })
], TopicsOrderByWithRelationInput);
exports.TopicsOrderByWithRelationInput = TopicsOrderByWithRelationInput;
