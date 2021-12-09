"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let CommentsCreateManyInput = class CommentsCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CommentsCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsCreateManyInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CommentsCreateManyInput.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CommentsCreateManyInput.prototype, "upadted_at", void 0);
CommentsCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CommentsCreateManyInput", {
        isAbstract: true
    })
], CommentsCreateManyInput);
exports.CommentsCreateManyInput = CommentsCreateManyInput;
