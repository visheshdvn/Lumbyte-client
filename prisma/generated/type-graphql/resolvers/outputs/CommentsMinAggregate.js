"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let CommentsMinAggregate = class CommentsMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CommentsMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentsMinAggregate.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CommentsMinAggregate.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], CommentsMinAggregate.prototype, "upadted_at", void 0);
CommentsMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("CommentsMinAggregate", {
        isAbstract: true
    })
], CommentsMinAggregate);
exports.CommentsMinAggregate = CommentsMinAggregate;
