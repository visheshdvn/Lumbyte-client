"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTopicsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsWhereInput_1 = require("../../../inputs/TopicsWhereInput");
let DeleteManyTopicsArgs = class DeleteManyTopicsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereInput_1.TopicsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereInput_1.TopicsWhereInput)
], DeleteManyTopicsArgs.prototype, "where", void 0);
DeleteManyTopicsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyTopicsArgs);
exports.DeleteManyTopicsArgs = DeleteManyTopicsArgs;
