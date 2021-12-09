"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TagsSumAggregate = class TagsSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TagsSumAggregate.prototype, "id", void 0);
TagsSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TagsSumAggregate", {
        isAbstract: true
    })
], TagsSumAggregate);
exports.TagsSumAggregate = TagsSumAggregate;
