"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsUpsertWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsCreateWithoutBlogpostsInput_1 = require("../inputs/TopicsCreateWithoutBlogpostsInput");
const TopicsUpdateWithoutBlogpostsInput_1 = require("../inputs/TopicsUpdateWithoutBlogpostsInput");
let TopicsUpsertWithoutBlogpostsInput = class TopicsUpsertWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsUpdateWithoutBlogpostsInput_1.TopicsUpdateWithoutBlogpostsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TopicsUpdateWithoutBlogpostsInput_1.TopicsUpdateWithoutBlogpostsInput)
], TopicsUpsertWithoutBlogpostsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsCreateWithoutBlogpostsInput_1.TopicsCreateWithoutBlogpostsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TopicsCreateWithoutBlogpostsInput_1.TopicsCreateWithoutBlogpostsInput)
], TopicsUpsertWithoutBlogpostsInput.prototype, "create", void 0);
TopicsUpsertWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TopicsUpsertWithoutBlogpostsInput", {
        isAbstract: true
    })
], TopicsUpsertWithoutBlogpostsInput);
exports.TopicsUpsertWithoutBlogpostsInput = TopicsUpsertWithoutBlogpostsInput;
