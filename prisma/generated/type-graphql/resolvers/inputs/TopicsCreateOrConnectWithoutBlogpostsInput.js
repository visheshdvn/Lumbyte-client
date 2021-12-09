"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsCreateOrConnectWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsCreateWithoutBlogpostsInput_1 = require("../inputs/TopicsCreateWithoutBlogpostsInput");
const TopicsWhereUniqueInput_1 = require("../inputs/TopicsWhereUniqueInput");
let TopicsCreateOrConnectWithoutBlogpostsInput = class TopicsCreateOrConnectWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereUniqueInput_1.TopicsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereUniqueInput_1.TopicsWhereUniqueInput)
], TopicsCreateOrConnectWithoutBlogpostsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsCreateWithoutBlogpostsInput_1.TopicsCreateWithoutBlogpostsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TopicsCreateWithoutBlogpostsInput_1.TopicsCreateWithoutBlogpostsInput)
], TopicsCreateOrConnectWithoutBlogpostsInput.prototype, "create", void 0);
TopicsCreateOrConnectWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TopicsCreateOrConnectWithoutBlogpostsInput", {
        isAbstract: true
    })
], TopicsCreateOrConnectWithoutBlogpostsInput);
exports.TopicsCreateOrConnectWithoutBlogpostsInput = TopicsCreateOrConnectWithoutBlogpostsInput;
