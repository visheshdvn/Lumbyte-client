"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsAvgOrderByAggregateInput_1 = require("../inputs/TopicsAvgOrderByAggregateInput");
const TopicsCountOrderByAggregateInput_1 = require("../inputs/TopicsCountOrderByAggregateInput");
const TopicsMaxOrderByAggregateInput_1 = require("../inputs/TopicsMaxOrderByAggregateInput");
const TopicsMinOrderByAggregateInput_1 = require("../inputs/TopicsMinOrderByAggregateInput");
const TopicsSumOrderByAggregateInput_1 = require("../inputs/TopicsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TopicsOrderByWithAggregationInput = class TopicsOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithAggregationInput.prototype, "topicname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithAggregationInput.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithAggregationInput.prototype, "ogimg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithAggregationInput.prototype, "ogalt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithAggregationInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithAggregationInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithAggregationInput.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsOrderByWithAggregationInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsCountOrderByAggregateInput_1.TopicsCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsCountOrderByAggregateInput_1.TopicsCountOrderByAggregateInput)
], TopicsOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsAvgOrderByAggregateInput_1.TopicsAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsAvgOrderByAggregateInput_1.TopicsAvgOrderByAggregateInput)
], TopicsOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsMaxOrderByAggregateInput_1.TopicsMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsMaxOrderByAggregateInput_1.TopicsMaxOrderByAggregateInput)
], TopicsOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsMinOrderByAggregateInput_1.TopicsMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsMinOrderByAggregateInput_1.TopicsMinOrderByAggregateInput)
], TopicsOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsSumOrderByAggregateInput_1.TopicsSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsSumOrderByAggregateInput_1.TopicsSumOrderByAggregateInput)
], TopicsOrderByWithAggregationInput.prototype, "_sum", void 0);
TopicsOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TopicsOrderByWithAggregationInput", {
        isAbstract: true
    })
], TopicsOrderByWithAggregationInput);
exports.TopicsOrderByWithAggregationInput = TopicsOrderByWithAggregationInput;
