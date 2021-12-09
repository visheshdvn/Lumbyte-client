"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TopicsCount = class TopicsCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicsCount.prototype, "blogposts", void 0);
TopicsCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TopicsCount", {
        isAbstract: true
    })
], TopicsCount);
exports.TopicsCount = TopicsCount;
