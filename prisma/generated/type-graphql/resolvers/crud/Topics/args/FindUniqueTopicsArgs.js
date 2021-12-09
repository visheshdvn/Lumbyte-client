"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTopicsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsWhereUniqueInput_1 = require("../../../inputs/TopicsWhereUniqueInput");
let FindUniqueTopicsArgs = class FindUniqueTopicsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereUniqueInput_1.TopicsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereUniqueInput_1.TopicsWhereUniqueInput)
], FindUniqueTopicsArgs.prototype, "where", void 0);
FindUniqueTopicsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueTopicsArgs);
exports.FindUniqueTopicsArgs = FindUniqueTopicsArgs;
