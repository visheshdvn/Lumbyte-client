"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTopicsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsWhereUniqueInput_1 = require("../../../inputs/TopicsWhereUniqueInput");
let DeleteTopicsArgs = class DeleteTopicsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereUniqueInput_1.TopicsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereUniqueInput_1.TopicsWhereUniqueInput)
], DeleteTopicsArgs.prototype, "where", void 0);
DeleteTopicsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteTopicsArgs);
exports.DeleteTopicsArgs = DeleteTopicsArgs;
