"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsCreateNestedOneWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsCreateOrConnectWithoutBlogpostsInput_1 = require("../inputs/TopicsCreateOrConnectWithoutBlogpostsInput");
const TopicsCreateWithoutBlogpostsInput_1 = require("../inputs/TopicsCreateWithoutBlogpostsInput");
const TopicsWhereUniqueInput_1 = require("../inputs/TopicsWhereUniqueInput");
let TopicsCreateNestedOneWithoutBlogpostsInput = class TopicsCreateNestedOneWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsCreateWithoutBlogpostsInput_1.TopicsCreateWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsCreateWithoutBlogpostsInput_1.TopicsCreateWithoutBlogpostsInput)
], TopicsCreateNestedOneWithoutBlogpostsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsCreateOrConnectWithoutBlogpostsInput_1.TopicsCreateOrConnectWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsCreateOrConnectWithoutBlogpostsInput_1.TopicsCreateOrConnectWithoutBlogpostsInput)
], TopicsCreateNestedOneWithoutBlogpostsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereUniqueInput_1.TopicsWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereUniqueInput_1.TopicsWhereUniqueInput)
], TopicsCreateNestedOneWithoutBlogpostsInput.prototype, "connect", void 0);
TopicsCreateNestedOneWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TopicsCreateNestedOneWithoutBlogpostsInput", {
        isAbstract: true
    })
], TopicsCreateNestedOneWithoutBlogpostsInput);
exports.TopicsCreateNestedOneWithoutBlogpostsInput = TopicsCreateNestedOneWithoutBlogpostsInput;
