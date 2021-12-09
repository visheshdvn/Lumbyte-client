"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTopicsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsCreateInput_1 = require("../../../inputs/TopicsCreateInput");
let CreateTopicsArgs = class CreateTopicsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsCreateInput_1.TopicsCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TopicsCreateInput_1.TopicsCreateInput)
], CreateTopicsArgs.prototype, "data", void 0);
CreateTopicsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateTopicsArgs);
exports.CreateTopicsArgs = CreateTopicsArgs;
