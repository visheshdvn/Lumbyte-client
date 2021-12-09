"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagsAvgOrderByAggregateInput_1 = require("../inputs/TagsAvgOrderByAggregateInput");
const TagsCountOrderByAggregateInput_1 = require("../inputs/TagsCountOrderByAggregateInput");
const TagsMaxOrderByAggregateInput_1 = require("../inputs/TagsMaxOrderByAggregateInput");
const TagsMinOrderByAggregateInput_1 = require("../inputs/TagsMinOrderByAggregateInput");
const TagsSumOrderByAggregateInput_1 = require("../inputs/TagsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOrderByWithAggregationInput = class TagsOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsOrderByWithAggregationInput.prototype, "tagname", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsOrderByWithAggregationInput.prototype, "color", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsOrderByWithAggregationInput.prototype, "metaDescription", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsOrderByWithAggregationInput.prototype, "ogimg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsOrderByWithAggregationInput.prototype, "ogalt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsOrderByWithAggregationInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsOrderByWithAggregationInput.prototype, "upadted_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsOrderByWithAggregationInput.prototype, "published_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagsOrderByWithAggregationInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsCountOrderByAggregateInput_1.TagsCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsCountOrderByAggregateInput_1.TagsCountOrderByAggregateInput)
], TagsOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsAvgOrderByAggregateInput_1.TagsAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsAvgOrderByAggregateInput_1.TagsAvgOrderByAggregateInput)
], TagsOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsMaxOrderByAggregateInput_1.TagsMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsMaxOrderByAggregateInput_1.TagsMaxOrderByAggregateInput)
], TagsOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsMinOrderByAggregateInput_1.TagsMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsMinOrderByAggregateInput_1.TagsMinOrderByAggregateInput)
], TagsOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagsSumOrderByAggregateInput_1.TagsSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagsSumOrderByAggregateInput_1.TagsSumOrderByAggregateInput)
], TagsOrderByWithAggregationInput.prototype, "_sum", void 0);
TagsOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagsOrderByWithAggregationInput", {
        isAbstract: true
    })
], TagsOrderByWithAggregationInput);
exports.TagsOrderByWithAggregationInput = TagsOrderByWithAggregationInput;
