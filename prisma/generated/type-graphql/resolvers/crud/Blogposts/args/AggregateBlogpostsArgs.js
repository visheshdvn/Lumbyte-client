"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBlogpostsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlogpostsOrderByWithRelationInput_1 = require("../../../inputs/BlogpostsOrderByWithRelationInput");
const BlogpostsWhereInput_1 = require("../../../inputs/BlogpostsWhereInput");
const BlogpostsWhereUniqueInput_1 = require("../../../inputs/BlogpostsWhereUniqueInput");
let AggregateBlogpostsArgs = class AggregateBlogpostsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereInput_1.BlogpostsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereInput_1.BlogpostsWhereInput)
], AggregateBlogpostsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlogpostsOrderByWithRelationInput_1.BlogpostsOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateBlogpostsArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlogpostsWhereUniqueInput_1.BlogpostsWhereUniqueInput)
], AggregateBlogpostsArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateBlogpostsArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateBlogpostsArgs.prototype, "skip", void 0);
AggregateBlogpostsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateBlogpostsArgs);
exports.AggregateBlogpostsArgs = AggregateBlogpostsArgs;
