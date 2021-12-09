"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTopicsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsCreateManyInput_1 = require("../../../inputs/TopicsCreateManyInput");
let CreateManyTopicsArgs = class CreateManyTopicsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TopicsCreateManyInput_1.TopicsCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyTopicsArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyTopicsArgs.prototype, "skipDuplicates", void 0);
CreateManyTopicsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyTopicsArgs);
exports.CreateManyTopicsArgs = CreateManyTopicsArgs;
