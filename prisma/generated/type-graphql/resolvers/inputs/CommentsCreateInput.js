"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let CommentsCreateInput = class CommentsCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsCreateInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CommentsCreateInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CommentsCreateInput.prototype, "upadted_at", void 0);
CommentsCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CommentsCreateInput", {
        isAbstract: true
    })
], CommentsCreateInput);
exports.CommentsCreateInput = CommentsCreateInput;
