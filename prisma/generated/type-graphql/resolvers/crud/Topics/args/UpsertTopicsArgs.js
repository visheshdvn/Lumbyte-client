"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTopicsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsCreateInput_1 = require("../../../inputs/TopicsCreateInput");
const TopicsUpdateInput_1 = require("../../../inputs/TopicsUpdateInput");
const TopicsWhereUniqueInput_1 = require("../../../inputs/TopicsWhereUniqueInput");
let UpsertTopicsArgs = class UpsertTopicsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereUniqueInput_1.TopicsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereUniqueInput_1.TopicsWhereUniqueInput)
], UpsertTopicsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsCreateInput_1.TopicsCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TopicsCreateInput_1.TopicsCreateInput)
], UpsertTopicsArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsUpdateInput_1.TopicsUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TopicsUpdateInput_1.TopicsUpdateInput)
], UpsertTopicsArgs.prototype, "update", void 0);
UpsertTopicsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertTopicsArgs);
exports.UpsertTopicsArgs = UpsertTopicsArgs;
