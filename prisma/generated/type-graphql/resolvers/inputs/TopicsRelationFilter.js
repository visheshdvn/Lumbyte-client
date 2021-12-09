"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsWhereInput_1 = require("../inputs/TopicsWhereInput");
let TopicsRelationFilter = class TopicsRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereInput_1.TopicsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereInput_1.TopicsWhereInput)
], TopicsRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereInput_1.TopicsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereInput_1.TopicsWhereInput)
], TopicsRelationFilter.prototype, "isNot", void 0);
TopicsRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TopicsRelationFilter", {
        isAbstract: true
    })
], TopicsRelationFilter);
exports.TopicsRelationFilter = TopicsRelationFilter;
