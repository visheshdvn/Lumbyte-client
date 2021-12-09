"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TopicsWhereUniqueInput = class TopicsWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicsWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicsWhereUniqueInput.prototype, "topicname", void 0);
TopicsWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TopicsWhereUniqueInput", {
        isAbstract: true
    })
], TopicsWhereUniqueInput);
exports.TopicsWhereUniqueInput = TopicsWhereUniqueInput;
