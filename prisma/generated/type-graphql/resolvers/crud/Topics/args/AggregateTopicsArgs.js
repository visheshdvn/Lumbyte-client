"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTopicsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsOrderByWithRelationInput_1 = require("../../../inputs/TopicsOrderByWithRelationInput");
const TopicsWhereInput_1 = require("../../../inputs/TopicsWhereInput");
const TopicsWhereUniqueInput_1 = require("../../../inputs/TopicsWhereUniqueInput");
let AggregateTopicsArgs = class AggregateTopicsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereInput_1.TopicsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereInput_1.TopicsWhereInput)
], AggregateTopicsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TopicsOrderByWithRelationInput_1.TopicsOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateTopicsArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereUniqueInput_1.TopicsWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereUniqueInput_1.TopicsWhereUniqueInput)
], AggregateTopicsArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateTopicsArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateTopicsArgs.prototype, "skip", void 0);
AggregateTopicsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateTopicsArgs);
exports.AggregateTopicsArgs = AggregateTopicsArgs;
