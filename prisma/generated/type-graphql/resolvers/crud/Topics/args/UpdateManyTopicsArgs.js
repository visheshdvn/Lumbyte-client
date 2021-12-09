"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTopicsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsUpdateManyMutationInput_1 = require("../../../inputs/TopicsUpdateManyMutationInput");
const TopicsWhereInput_1 = require("../../../inputs/TopicsWhereInput");
let UpdateManyTopicsArgs = class UpdateManyTopicsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsUpdateManyMutationInput_1.TopicsUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TopicsUpdateManyMutationInput_1.TopicsUpdateManyMutationInput)
], UpdateManyTopicsArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereInput_1.TopicsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereInput_1.TopicsWhereInput)
], UpdateManyTopicsArgs.prototype, "where", void 0);
UpdateManyTopicsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyTopicsArgs);
exports.UpdateManyTopicsArgs = UpdateManyTopicsArgs;
