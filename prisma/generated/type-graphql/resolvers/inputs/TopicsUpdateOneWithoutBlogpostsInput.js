"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsUpdateOneWithoutBlogpostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TopicsCreateOrConnectWithoutBlogpostsInput_1 = require("../inputs/TopicsCreateOrConnectWithoutBlogpostsInput");
const TopicsCreateWithoutBlogpostsInput_1 = require("../inputs/TopicsCreateWithoutBlogpostsInput");
const TopicsUpdateWithoutBlogpostsInput_1 = require("../inputs/TopicsUpdateWithoutBlogpostsInput");
const TopicsUpsertWithoutBlogpostsInput_1 = require("../inputs/TopicsUpsertWithoutBlogpostsInput");
const TopicsWhereUniqueInput_1 = require("../inputs/TopicsWhereUniqueInput");
let TopicsUpdateOneWithoutBlogpostsInput = class TopicsUpdateOneWithoutBlogpostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsCreateWithoutBlogpostsInput_1.TopicsCreateWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsCreateWithoutBlogpostsInput_1.TopicsCreateWithoutBlogpostsInput)
], TopicsUpdateOneWithoutBlogpostsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsCreateOrConnectWithoutBlogpostsInput_1.TopicsCreateOrConnectWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsCreateOrConnectWithoutBlogpostsInput_1.TopicsCreateOrConnectWithoutBlogpostsInput)
], TopicsUpdateOneWithoutBlogpostsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsUpsertWithoutBlogpostsInput_1.TopicsUpsertWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsUpsertWithoutBlogpostsInput_1.TopicsUpsertWithoutBlogpostsInput)
], TopicsUpdateOneWithoutBlogpostsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], TopicsUpdateOneWithoutBlogpostsInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], TopicsUpdateOneWithoutBlogpostsInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsWhereUniqueInput_1.TopicsWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsWhereUniqueInput_1.TopicsWhereUniqueInput)
], TopicsUpdateOneWithoutBlogpostsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TopicsUpdateWithoutBlogpostsInput_1.TopicsUpdateWithoutBlogpostsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TopicsUpdateWithoutBlogpostsInput_1.TopicsUpdateWithoutBlogpostsInput)
], TopicsUpdateOneWithoutBlogpostsInput.prototype, "update", void 0);
TopicsUpdateOneWithoutBlogpostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TopicsUpdateOneWithoutBlogpostsInput", {
        isAbstract: true
    })
], TopicsUpdateOneWithoutBlogpostsInput);
exports.TopicsUpdateOneWithoutBlogpostsInput = TopicsUpdateOneWithoutBlogpostsInput;
