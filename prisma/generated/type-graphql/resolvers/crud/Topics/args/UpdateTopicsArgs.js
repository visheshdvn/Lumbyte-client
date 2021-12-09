"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTopicsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsUpdateInput_1 = require("../../../inputs/TopicsUpdateInput");
const TopicsWhereUniqueInput_1 = require("../../../inputs/TopicsWhereUniqueInput");
let UpdateTopicsArgs = class UpdateTopicsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsUpdateInput_1.TopicsUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TopicsUpdateInput_1.TopicsUpdateInput)
], UpdateTopicsArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereUniqueInput_1.TopicsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereUniqueInput_1.TopicsWhereUniqueInput)
], UpdateTopicsArgs.prototype, "where", void 0);
UpdateTopicsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateTopicsArgs);
exports.UpdateTopicsArgs = UpdateTopicsArgs;
